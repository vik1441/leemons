import React, { useEffect, useState } from 'react';
import { FormControl, Input, PageContainer, PageHeader, Badge, Button } from 'leemons-ui'; 
import tLoader from '@multilanguage/helpers/tLoader';
import useTranslate from '@multilanguage/useTranslate';
import { useSession } from '@users/session';
import { goLoginPage } from '@users/navigate';
import { withLayout } from '@layout/hoc'; 
import prefixPN from '@families/helpers/prefixPN';
import SearchResults from '@families/components/wip-ui/pages/search-results';


// Pagina a la que solo tendra acceso el super admin o los usuarios con el permiso de gestionar Clases
function Families() {
  useSession({ redirectTo: goLoginPage });

  // --------------------------------------------------------
  // LANG PICKER
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(async () => {
    const request = await leemons.api(
      {
        url: 'multilanguage/locales',
        allAgents: true,
      },
      {
        method: 'GET',
      }
    );
    if (request.locales && Array.isArray(request.locales)) {
      setLanguages(request.locales);
    }
  }, []);

  const [translations] = useTranslate({
    keysStartsWith: prefixPN(''),
    locale: selectedLanguage === 'default' ? undefined : selectedLanguage,
  });
  const t = tLoader(prefixPN('list_page'), translations);
  const tc = tLoader(prefixPN('common'), translations);

  return (
    <>
      <div className="bg-secondary-content w-full h-screen overflow-auto">
        <PageHeader
          separator={false}
          title={t('title')}
          description={t('description')}
          importFamiliesButton={true}
          newButton={true}
        />

        <div className="bg-primary-content w-full">
          <div className="max-w-screen-xl w-full mx-auto p-6">
            <h2 className="resultcount flex items-center" aria-live="polite">
              {' '}
              <Badge outlined>250</Badge>{' '}
              <span className="text-xl font-medium">{t('families')}</span>
            </h2>
          </div>
        </div>

        <SearchResults></SearchResults>
      </div>
    </>
  );
}

export default withLayout(Families);
