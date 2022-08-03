const {
  Schema: {
    Types: { Mixed, ObjectId, String: StringType, Date: DateType },
  },
  Schema: MongoSchema,
} = require('mongoose');

StringType.checkRequired((v) => v !== null);

const uuid = require('uuid');

function getType(property, ctx) {
  // Get the mongoose equivalent type
  switch (property?.type?.toLowerCase()) {
    case 'string':
    case 'text':
    case 'richtext':
      return { type: StringType };
    case 'int':
    case 'integer':
    case 'bigint':
    case 'biginteger':
      return { type: Number };
    case 'date':
    case 'datetime':
      return {
        type: DateType,
        set: (v) => new Date(v),
        get: (v) => (v ? v.toISOString() : null),
      };
    case 'buffer':
      return { type: Buffer };
    case 'boolean':
    case 'bool':
      return { type: Boolean };
    case 'mixed':
    case 'json':
    case 'jsonb':
      return { type: Mixed };
    case 'objectid':
      return { type: ObjectId };
    case 'uuid':
      return {
        type: StringType,
        validate: {
          validator(v) {
            if (!property?.options?.notNullable && !property?.options?.notNull && v === null) {
              return true;
            }
            return /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gm.test(
              v
            );
          },
          message: (props) => `${props.value} is not a valid UUID!`,
        },
      };
    case 'enu':
    case 'enumeration':
      if (!Array.isArray(property.values)) {
        return null;
      }

      if (property.enum.every((value) => typeof value === 'string')) {
        return {
          type: StringType,
          enum: property.enum,
        };
      }

      if (property.enum.every((value) => typeof value === 'number')) {
        return {
          type: Number,
          enum: property.enum,
        };
      }
      return null;
    case 'array':
      return { type: [getType({ type: property.of }, ctx)] };
    case 'number':
    case 'decimal':
    case 'float':
    case 'double':
      return { type: Number };
    // case 'map':
    default:
      if (ctx.schemas.has(property.type)) {
        return { type: ctx.schemas.get(property.type) };
      }
      return null;
  }
}

function getOptions(property) {
  const options = {};
  if (property.options) {
    Object.entries(property.options).forEach(([name, value]) => {
      if (value === true) {
        switch (name.toLowerCase()) {
          case 'unique':
            options.unique = true;
            break;
          case 'index':
            options.sparse = true;
            break;
          case 'notnullable':
          case 'notnull':
            options.required = '{PATH} is required!';
            break;
          default:
        }
      } else if (value !== undefined) {
        switch (name.toLowerCase()) {
          case 'defaultto':
            options.default = value;
            break;
          default:
        }
      }
    });
  }

  return options;
}

function createSchema(schema, ctx) {
  const attributes = Object.entries(schema.schema.attributes)
    .map(([name, attribute]) => {
      if (attribute.references) {
        return [
          name,
          {
            type: 'uuid',
            ...attribute,
            options: {
              ...attribute.options,
              notNull: false,
            },
          },
        ];
      }

      return [name, attribute];
    })
    .map(([name, attribute]) => ({
      name,
      ...getType(attribute, ctx),
      ...getOptions(attribute),
    }))
    .filter((attribute) => attribute.type);
  const Schema = {};
  const options = {
    minimize: false,
    toJSON: {
      getters: true,
    },
  };
  attributes.forEach(({ name, ...attribute }) => {
    Schema[name] = attribute;
  });

  Schema._id = {
    type: StringType,
    default: uuid.v4,
  };

  if (schema.schema.options?.useTimestamps) {
    options.timestamps = {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };

    if (schema.schema.options?.softDelete) {
      Schema.deleted_at = DateType;
    }
  }

  const MS = new MongoSchema(Schema, options);

  // if (schema.schema.options?.indexes) {
  //   const { indexes } = schema.schema.options;
  //   if (!Array.isArray(indexes)) {
  //     throw new Error('Indexes must be an array');
  //   }
  //   indexes.forEach(({ $options, ...index }) => {
  //     MS.index(index, $options);
  //   });
  // }

  return { name: schema.modelName, schema: MS };
}

module.exports = createSchema;
