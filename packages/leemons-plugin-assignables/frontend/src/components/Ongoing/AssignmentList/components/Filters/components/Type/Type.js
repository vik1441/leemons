/* eslint-disable react/display-name */
import prefixPN from '@assignables/helpers/prefixPN';
import { Select } from '@bubbles-ui/components';
import { unflatten } from '@common';
import useTranslateLoader from '@multilanguage/useTranslateLoader';
import _ from 'lodash';
import React, { useMemo } from 'react';

function capitalize(str) {
  return str?.[0]?.toUpperCase() + str?.substring(1, str.length);
}

export function useRoles() {
  const [, translations] = useTranslateLoader(prefixPN('roles'));

  const roles = useMemo(() => {
    if (translations && translations.items) {
      const res = unflatten(translations.items);
      const data = _.get(res, prefixPN('roles'));

      // EN: Modify the data object here
      // ES: Modifica el objeto data aquí
      return Object.entries(data).map(([key, value]) => ({
        label: capitalize(value.singular),
        plural: capitalize(value.plural),
        value: key,
      }));
    }

    return [];
  }, [translations]);

  return roles;
}

const Type = React.forwardRef(({ labels, value, onChange }, ref) => {
  const roles = useRoles();

  return (
    <Select
      label={labels?.type}
      data={[
        {
          label: labels?.seeAll,
          value: 'all',
        },
        ...roles,
      ]}
      value={value}
      onChange={onChange}
    />
  );
});

export default Type;
