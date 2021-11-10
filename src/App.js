import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import AddNewServices from './Components/AddNewServices/AddNewServices';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="">
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>
          <Route path='/manageOrders'>
            <ManageOrders></ManageOrders>
          </Route>
          <Route path='/addServices'>
            <AddNewServices></AddNewServices>
          </Route>
          <PrivateRoute path='/serviceDetails/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path='/logIn'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
