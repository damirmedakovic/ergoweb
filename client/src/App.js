import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import CaseList from './components/CaseList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/CaseModal';
import { Container} from 'reactstrap';
import { loadUser } from './actions/authActions';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
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
}

export default App;
