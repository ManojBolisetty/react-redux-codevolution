import './App.css';
import CakeContainer from './components/CakeContainer';
import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCremeContainer from './components/IceCremeContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <NewCakeContainer/>
        <IceCremeContainer/>
      </div>
    </Provider>
  );
}

export default App;
