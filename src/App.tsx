import React, { Suspense } from 'react';
import 'styles/scss/App.scss';
import logo from 'images/logo.svg';
import { Loading } from 'components/atoms';

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Suspense>
    </>
  );
}

export default App;
