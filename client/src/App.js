import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CaseList from './components/CaseList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container} from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <AppNavbar />
     <Container>
     <ItemModal />
     <CaseList />
     </Container>
    </div>
    </Provider>
  );
}

export default App;
