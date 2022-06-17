import React, { Suspense } from 'react';
import 'styles/scss/App.scss';
import { Loading } from 'components/atoms';
import { Route, Switch } from 'react-router-dom';
import { Mainpage, NotFoundPage } from 'components/pages';

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
