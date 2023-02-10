/* eslint-disable no-param-reassign */
const { table } = require('../tables');
const getPackage = require('./getPackage');

async function duplicatePackage(id, { published, userSession, transacting: _transacting } = {}) {
  const { assignables: assignableService } = leemons.getPlugin('assignables').services;
  const { assets: assetsService } = leemons.getPlugin('leebrary').services;
  return global.utils.withTransaction(
    async (transacting) => {
      const newAssignable = await assignableService.duplicateAssignable(id, {
        published,
        userSession,
        transacting,
      });

      const scormPackage = await getPackage(id, { userSession, transacting });

      const newPackage = { ...scormPackage };
      delete newPackage.id;
      newPackage.assignable = newAssignable.id;

      await table.packages.create(newPackage, { transacting });

      if (newAssignable.metadata.featuredImage) {
        const newFeaturedImage = await assetsService.duplicate(
          newAssignable.metadata.featuredImage,
          {
            preserveName: true,
            userSession,
            transacting,
          }
        );
        newAssignable.metadata.featuredImage = newFeaturedImage.id;
        await assignableService.updateAssignable(newAssignable, {
          userSession,
          transacting,
          published,
        });
      }

      return true;
    },
    table.packages,
    _transacting
  );
}

module.exports = duplicatePackage;
