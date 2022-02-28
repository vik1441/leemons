const table = {
  programConfigs: leemons.query('plugins_scores::program-configs'),
  programEvaluations: leemons.query('plugins_scores::program-evaluations'),
  userEvaluationNotes: leemons.query('plugins_scores::user-evaluation-notes'),
  userTaskNote: leemons.query('plugins_scores::user-task-note'),
};

module.exports = { table };
