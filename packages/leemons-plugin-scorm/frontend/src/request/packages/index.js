const { cloneDeep, isString } = require('lodash');

async function savePackage(data) {
  const body = cloneDeep(data);
  const form = new FormData();

  if (
    (data.featuredImage && !isString(data.featuredImage)) ||
    (data.cover && !isString(data.cover))
  ) {
    const { cover, featuredImage, ...asset } = body;
    if (data.cover) {
      if (data.cover.cover) {
        asset.cover = data.cover.cover?.id;
      } else if (data.cover.id) {
        asset.cover = data.cover.id;
      } else {
        form.append('cover', data.cover, data.cover.name);
      }
    }
    if (data.featuredImage) {
      if (data.featuredImage.cover) {
        asset.featuredImage = data.featuredImage.cover?.id;
      } else if (data.featuredImage.id) {
        asset.featuredImage = data.featuredImage.id;
      } else {
        form.append('featuredImage', data.featuredImage, data.featuredImage.name);
      }
    }
    form.append('data', JSON.stringify(asset));
  } else {
    form.append('data', JSON.stringify(body));
  }

  return leemons.api('scorm/package', {
    allAgents: true,
    method: 'POST',
    headers: {
      'content-type': 'none',
    },
    body: form,
  });
}

async function getPackage(id) {
  return leemons.api(`scorm/package/${id}`, {
    allAgents: true,
    method: 'GET',
  });
}

async function deletePackage(id) {
  return leemons.api(`scorm/package/${id}`, {
    allAgents: true,
    method: 'DELETE',
  });
}

async function duplicatePackage(id, published) {
  return leemons.api(`scorm/package/duplicate`, {
    allAgents: true,
    method: 'POST',
    body: {
      id,
      published,
    },
  });
}

async function assignPackage(id, data) {
  return leemons.api(`scorm/package/assign`, {
    allAgents: true,
    method: 'POST',
    body: {
      id,
      data,
    },
  });
}

async function sharePackage(id, { canAccess }) {
  return leemons.api(`scorm/package/share`, {
    allAgents: true,
    method: 'POST',
    body: {
      assignableId: id,
      canAccess,
    },
  });
}

export { savePackage, getPackage, deletePackage, duplicatePackage, assignPackage, sharePackage };
