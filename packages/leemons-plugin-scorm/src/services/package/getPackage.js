/* eslint-disable no-param-reassign */
const _ = require('lodash');
const { table } = require('../tables');

async function getPackage(id, { userSession, transacting } = {}) {
  const { assignables: assignableService } = leemons.getPlugin('assignables').services;
  const assetService = leemons.getPlugin('leebrary').services.assets;

  // Check is userSession is provided
  if (!userSession) throw new Error('User session is required (getPackage)');

  const ids = _.isArray(id) ? id : [id];

  const assignables = await Promise.all(
    _.map(ids, (_id) =>
      assignableService.getAssignable(_id, {
        userSession,
        withFiles: true,

        transacting,
      })
    )
  );

  const imagesIds = [];
  _.forEach(assignables, (assignable) => {
    if (assignable.metadata.featuredImage) imagesIds.push(assignable.metadata.featuredImage);
  });

  const packageAssets = await assetService.getByIds(imagesIds, {
    withFiles: true,
    userSession,
    transacting,
  });

  const packageAssetsById = _.keyBy(packageAssets, 'id');

  const assignableIds = _.map(assignables, 'id');
  const documents = await table.packages.find(
    { assignable_$in: assignableIds },
    {
      transacting,
    }
  );

  const documentsById = _.keyBy(documents, 'assignable');

  const result = _.map(assignables, (assignable) => {
    const toReturn = {
      id: assignable.id,
      asset: assignable.asset,
      name: assignable.asset.name,
      file: assignable.asset.file,
      tags: assignable.asset.tags,
      color: assignable.asset.color,
      cover: assignable.asset.cover,
      tagline: assignable.asset.tagline,
      featuredImage: packageAssetsById[assignable.metadata.featuredImage],
      description: assignable.asset.description,
      introductoryText: assignable.statement,
      content: documentsById[assignable.id]?.content,
    };
    return toReturn;
  });
  return _.isArray(id) ? result : result[0];
}

module.exports = getPackage;
