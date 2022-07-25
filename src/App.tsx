import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'styles/scss/App.scss';
import { Loading } from 'components/molecules';
import { AboutPage, LoginPage, Mainpage, NotFoundPage } from 'components/pages';
import { Header } from 'components/organisms';

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/about' component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
