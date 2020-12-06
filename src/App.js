import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import Signin from 'container/Signin';
import Signup from 'container/Signup';
import Page404 from 'container/ErrorPage/Page404';
import { PrivateRoute } from 'PrivateRoute';

function App({ store }) {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/signin" component={Signin} />
            <PrivateRoute exact path="/signup" component={Signup} />
           
            <Route path='*' exact component={Page404} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
