// Nota del usuario para una tarea de una clase.
module.exports = {
  modelName: 'user-task-note',
  collectionName: 'user-task-note',
  options: {
    useTimestamps: true,
  },
  attributes: {
    task: {
      references: {
        collection: 'plugins_tasks::tasks',
      },
    },
    userAgent: {
      references: {
        collection: 'plugins_users::user-agent',
      },
    },
    score: {
      type: 'float',
    },
    customScore: {
      type: 'float',
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
