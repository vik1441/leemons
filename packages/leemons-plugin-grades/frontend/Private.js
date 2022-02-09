import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import loadable from '@loadable/component';
import { useSession } from '@users/session';
import { goLoginPage } from '@users/navigate';

const Welcome = loadable(() => import('./src/pages/private/WelcomePage'));
const EvaluationList = loadable(() => import('./src/pages/private/Evaluations/EvaluationList'));
const PromotionsList = loadable(() => import('./src/pages/private/Promotions/PromotionsList'));
const DependenciesList = loadable(() =>
  import('./src/pages/private/Dependencies/DependenciesList')
);

export default function Private() {
  const { path } = useRouteMatch();
  const session = useSession({ redirectTo: goLoginPage });

  return (
    <Switch>
      <Route path={`${path}/welcome`}>
        <Welcome session={session} />
      </Route>
      <Route path={`${path}/evaluations`}>
        <EvaluationList session={session} />
      </Route>
      <Route path={`${path}/promotions`}>
        <PromotionsList session={session} />
      </Route>
      <Route path={`${path}/dependencies`}>
        <DependenciesList session={session} />
      </Route>
    </Switch>
  );
}
