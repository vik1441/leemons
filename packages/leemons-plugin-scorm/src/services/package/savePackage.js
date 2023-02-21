/* eslint-disable no-param-reassign */
const _ = require('lodash');
const pathSys = require('path');
const fs = require('fs');
const mime = require('mime-types');
const { table } = require('../tables');
const { validateSavePackage } = require('../../validations/forms');
const createPackage = require('./createPackage');
const updatePackage = require('./updatePackage');

async function savePackage(_data, { userSession, transacting: _transacting } = {}) {
  const { assignables: assignableService } = leemons.getPlugin('assignables').services;
  return global.utils.withTransaction(
    async (transacting) => {
      const data = _.cloneDeep(_data);
      // Check is userSession is provided
      if (!userSession) throw new Error('User session is required (savePackage)');
      delete data.asset;
      validateSavePackage(data);
      const { published } = data;

      const toSave = {
        asset: {
          name: data.name,
          tagline: data.tagline,
          description: data.description,
          color: data.color,
          cover: data.cover,
          tags: data.tags,
          indexable: true,
          public: true, // TODO Cambiar a false despues de la demo
        },
        role: 'scorm',
        statement: data.introductoryText || '',
        subjects: _.map(data.subjects, ({ level, subject }) => ({
          level,
          subject,
          program: data.program,
        })),
        gradable: false,
        metadata: {},
      };

      let assignable = null;
      const isNew = !!data.id;

      if (isNew) {
        assignable = await assignableService.createAssignable(toSave, {
          userSession,
          transacting,
          published: false,
        });
      } else {
        delete toSave.role;
        assignable = await assignableService.updateAssignable(
          { id: data.id, ...toSave },
          {
            userSession,
            transacting,
          }
        );
      }

      let featuredImage = null;
      if (assignable.metadata.featuredImage) {
        if (data.featuredImage) {
          featuredImage = await leemons.getPlugin('leebrary').services.assets.update(
            {
              id: assignable.metadata.featuredImage,
              name: `Image SCORM package - ${assignable.id}`,
              cover: data.featuredImage,
              description: '',
              indexable: false,
              public: true,
            },
            {
              published,
              userSession,
              transacting,
            }
          );
        } else {
          await leemons
            .getPlugin('leebrary')
            .services.assets.remove(assignable.metadata.featuredImage, {
              userSession,
              transacting,
            });
        }
      } else if (data.featuredImage) {
        featuredImage = await leemons.getPlugin('leebrary').services.assets.add(
          {
            name: `Image SCORM package - ${assignable.id}`,
            cover: data.featuredImage,
            description: '',
            indexable: false,
            public: true,
          },
          {
            published,
            userSession,
            transacting,
          }
        );
      }

      toSave.metadata.featuredImage = featuredImage?.id;
      assignable = await assignableService.updateAssignable(
        { id: assignable.id, ...toSave },
        {
          userSession,
          transacting,
          published: isNew ? false : published,
        }
      );

      const currentPackage = await table.packages.findOne(
        { assignable: assignable.id },
        {
          columns: ['id'],
          transacting,
        }
      );

      let scormPackage = null;
      const packageData = { assignable: assignable.id };

      if (data.packageFile) {
        const file = data.packageFile;
        const contentType = file.type;
        const extension = mime.extension(contentType);

        if (extension !== 'zip') {
          throw new Error('File must be a ZIP file');
        }

        // Folder creation
        const packageFolder = pathSys.resolve(
          __dirname,
          '..',
          '..',
          '..',
          'frontend',
          'public',
          'packages'
        );

        if (!fs.existsSync(packageFolder)) {
          fs.mkdirSync(packageFolder);
        }

        const scormPackageFolder = pathSys.resolve(packageFolder, assignable.id);

        if (fs.existsSync(scormPackageFolder)) {
          fs.rmdirSync(scormPackageFolder, { recursive: true, force: true });
        }

        await global.utils.decompress(file.path, scormPackageFolder);

        const manifestPath = pathSys.resolve(scormPackageFolder, 'imsmanifest.xml');

        if (!fs.existsSync(manifestPath)) {
          throw new Error('Manifest XML File missing');
        }

        const xmlToConvert = fs.readFileSync(manifestPath, {
          encoding: 'UTF8',
        });

        const { manifest } = global.utils.xml2json.toJson(xmlToConvert, {
          object: true,
        });

        let resource = null;

        if (_.isArray(manifest.resources)) {
          resource = manifest.resources.find(
            (item) => item.type === 'webcontent' && (item.href ?? '').indexOf('.html') > 0
          );
        } else {
          resource = manifest.resources.resource;
        }

        packageData.launchUrl = resource?.href ?? currentPackage?.launchUrl ?? 'index.html';
      }

      if (currentPackage?.id) {
        scormPackage = await updatePackage(currentPackage.id, packageData, { transacting });
      } else {
        scormPackage = await createPackage(packageData, { transacting });
      }

      return scormPackage;
    },
    table.packages,
    _transacting
  );
}

module.exports = savePackage;
