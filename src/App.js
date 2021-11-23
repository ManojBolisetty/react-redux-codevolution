import './App.css';
import CakeContainer from './components/CakeContainer';
import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCremeContainer from './components/IceCremeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCremeContainer/>
      </div>
    </Provider>
  );
}

export default App;
