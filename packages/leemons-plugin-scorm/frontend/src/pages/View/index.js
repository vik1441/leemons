import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, PageHeader, LoadingOverlay, Stack } from '@bubbles-ui/components';
import useTranslateLoader from '@multilanguage/useTranslateLoader';
import { useStore } from '@common';
import { addErrorAlert } from '@layout/alert';
import getAssignableInstance from '@assignables/requests/assignableInstances/getAssignableInstance';
import { prefixPN } from '@scorm/helpers';
import { DocumentIcon } from '@scorm/components/icons';
import { getPackageRequest } from '@scorm/request';

export default function Index() {
  const [t, , , tLoading] = useTranslateLoader(prefixPN('scormSetup'));

  // ----------------------------------------------------------------------
  // SETTINGS

  const [store, render] = useStore({
    loading: true,
    isNew: false,
    titleValue: '',
    package: {},
    preparedAsset: {},
  });

  const params = useParams();

  // ----------------------------------------------------------------------
  // INIT DATA LOADING

  async function init() {
    try {
      store.loading = true;
      render();
      store.instance = await getAssignableInstance({ id: params.id });
      const { scorm } = await getPackageRequest(store.instance.assignable.id);
      store.package = scorm;
      store.idLoaded = params.id;
      store.loading = false;
      render();
    } catch (error) {
      addErrorAlert(error);
    }
  }

  useEffect(() => {
    if (params?.id && store.idLoaded !== params?.id) init();
  }, [params]);

  // ----------------------------------------------------------------------
  // COMPONENT

  if (store.loading || tLoading) return <LoadingOverlay visible />;

  return (
    <Box style={{ height: '100vh' }}>
      <Stack direction="column" fullHeight>
        <PageHeader
          values={{
            title: store.package.name,
          }}
          icon={<DocumentIcon />}
          loading={store.saving}
          fullWidth
        />
        <Box>Aquí debería ir el disparador del contenido SCORM</Box>
      </Stack>
    </Box>
  );
}
