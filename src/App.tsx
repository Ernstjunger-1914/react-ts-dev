import React, { Suspense } from 'react';
import 'styles/scss/App.scss';
import { Loading } from 'components/molecules';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, Mainpage, NotFoundPage } from 'components/pages';

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route path='/login' component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
