const { map, difference } = require('lodash');
const { searchAssignableInstancesByClass } = require('../classes');
const tables = require('../tables');

async function filterByOpenInstances(instances) {
  const alwaysAvailableInstances = await tables.assignableInstances.find(
    {
      id_$in: instances,
      alwaysAvailable: true,
    },
    { column: ['id'] }
  );

  const alwaysAvailableInstancesIds = map(alwaysAvailableInstances, 'id');

  const archivedInstances = await tables.dates.find(
    {
      type: 'assignableInstance',
      instance_$in: alwaysAvailableInstancesIds,
      name: 'archived',
    },
    { column: ['instance'] }
  );

  const archivedInstancesIds = map(archivedInstances, 'instance');

  const openInstances = difference(alwaysAvailableInstancesIds, archivedInstancesIds);

  return openInstances;
}

async function addStudentToInstances({ student, instances, tries = 0, userSession }) {
  const assignationPromises = instances.map(async (instance) => {
    for (let createAssignationTries = 0; createAssignationTries < 3; createAssignationTries++) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const response = await leemons.plugin.services.assignations.createAssignation(
          instance,
          [student],
          { indexable: true },
          { userSession }
        );
        return response;
      } catch (e) {
        if (createAssignationTries === 2) {
          throw e;
        }
      }
    }

    return null;
  });

  try {
    return await Promise.all(assignationPromises);
  } catch (e) {
    if (tries < 3) {
      return addStudentToInstances({ student, instances, try: tries + 1 });
    }

    throw e;
  }
}

async function getMainTeacherUserSession(klass) {
  const teachers = await leemons
    .getPlugin('academic-portfolio')
    .services.classes.teacher.getByClass(
      { id: klass },
      {
        type: 'main-teacher',
        returnIds: true,
      }
    );

  const mainTeacher = teachers[0];

  const userSession = {
    userAgents: [
      {
        id: mainTeacher,
      },
    ],
  };

  return userSession;
}

module.exports = async function addStudentsToOpenInstancesWithClass({ student, class: klass }) {
  const assignableInstances = await searchAssignableInstancesByClass(klass);

  const openInstances = await filterByOpenInstances(assignableInstances);

  const userSession = await getMainTeacherUserSession(klass);

  return addStudentToInstances({ student, instances: openInstances, userSession });
};
