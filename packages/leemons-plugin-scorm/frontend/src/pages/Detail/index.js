import React, { useEffect } from 'react';
import {
  Box,
  PageHeader,
  LoadingOverlay,
  Stack,
  useDebouncedCallback,
} from '@bubbles-ui/components';
import useTranslateLoader from '@multilanguage/useTranslateLoader';
import { useStore } from '@common';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addErrorAlert, addSuccessAlert } from '@layout/alert';
import { AssetFormInput } from '@leebrary/components';
import { prefixPN } from '@scorm/helpers';
import { savePackageRequest, getPackageRequest } from '@scorm/request';
import { SetupContent, DocumentIcon } from '@scorm/components/icons';
import { PageContent } from './components/PageContent/PageContent';

export default function Index() {
  const [t, , , tLoading] = useTranslateLoader(prefixPN('scormDetail'));

  // ----------------------------------------------------------------------
  // SETTINGS

  const debounce = useDebouncedCallback(1000);
  const [store, render] = useStore({
    loading: true,
    isNew: false,
    package: {},
    titleValue: '',
    preparedAsset: {},
    openShareDrawer: false,
  });

  const history = useHistory();
  const params = useParams();

  const form = useForm();
  const formValues = form.watch();

  // ----------------------------------------------------------------------------
  // INIT DATA LOADING

  async function init() {
    try {
      store.loading = true;
      store.isNew = params.id === 'new';
      render();
      if (!store.isNew) {
        const {
          // eslint-disable-next-line camelcase
          scorm: { deleted, deleted_at, created_at, updated_at, ...props },
        } = await getPackageRequest(params.id);
        // eslint-disable-next-line react/prop-types
        store.titleValue = props.name;
        store.package = { ...props };
        form.reset(props);
      }
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

  // ----------------------------------------------------------------------------
  // METHODS

  async function saveAsDraft() {
    try {
      store.saving = 'duplicate';
      render();
      await savePackageRequest({ ...formValues, published: false });
      addSuccessAlert(t('savedAsDraft'));
      history.push('/private/scorm/?fromDraft=1');
    } catch (error) {
      addErrorAlert(error);
    }
    store.saving = null;
    render();
  }

  async function saveAsPublish() {
    try {
      store.saving = 'edit';
      render();
      const { package: packageRequest } = await savePackageRequest({
        ...formValues,
        published: true,
      });
      store.package = packageRequest;
      addSuccessAlert(t('published'));
    } catch (error) {
      addErrorAlert(error);
    } finally {
      store.saving = null;
      render();
    }
  }

  async function onlyPublish() {
    await saveAsPublish();
    history.push('/private/scorm');
  }

  async function publishAndAssign() {
    await saveAsPublish();
    history.push(`/private/scorm/assign/${store.package.assignable}`);
  }

  // ----------------------------------------------------------------------------
  // HANDLERS

  const onTitleChangeHandler = (value) => {
    form.setValue('name', value);
    store.titleValue = value;
    render();
  };

  // ----------------------------------------------------------------------------
  // EFFECTS

  useEffect(() => {
    const subscription = form.watch(() => {
      debounce(async () => {
        store.isValid = await form.trigger();
        render();
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  // ----------------------------------------------------------------------------
  // COMPONENT

  if (store.loading || tLoading) return <LoadingOverlay visible />;

  const advancedConfig = {
    alwaysOpen: false,
    fileToRight: true,
    colorToRight: true,
    program: { show: true, required: true },
    subjects: { show: true, required: true, showLevel: true, maxOne: false },
  };

  return (
    <Box style={{ height: '100vh' }}>
      <Stack direction="column" fullHeight>
        <PageHeader
          placeholders={{ title: t('titlePlaceholder') }}
          values={{
            title: formValues.name,
          }}
          buttons={{
            duplicate: t('saveDraft'),
            edit: false,
            dropdown: t('publishOptions'),
          }}
          buttonsIcons={{
            edit: <SetupContent size={16} />,
          }}
          isEditMode={true}
          icon={<DocumentIcon />}
          onChange={onTitleChangeHandler}
          onDuplicate={() => saveAsDraft()}
          onDropdown={[
            { label: t('onlyPublish'), onClick: () => onlyPublish() },
            // { label: t('publishAndShare'), onClick: () => publishAndShare() },
            { label: t('publishAndAssign'), onClick: () => publishAndAssign() },
          ]}
          loading={store.saving}
          fullWidth
        />

        <PageContent title={t('config')}>
          <Box style={{ padding: '48px 32px' }}>
            <AssetFormInput
              preview
              form={form}
              category="assignables.content-creator"
              previewVariant="document"
              advancedConfig={advancedConfig}
              tagsPluginName="content-creator"
            />
          </Box>
        </PageContent>
      </Stack>
    </Box>
  );
}
