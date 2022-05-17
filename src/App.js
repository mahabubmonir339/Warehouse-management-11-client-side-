import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home/Home';
import Signin from './components/Home/Signin/Signin';
import Register from './components/Home/Register/Register';
import NotFound from './components/Home/NotFound/NotFound';
import Deals from './components/Home/Deals/Deals';
import Rewards from './components/Home/Rewards/Rewards';
import Tours from './components/Home/Tours/Tours';
import TourBooking from './components/Home/TourBooking/TourBooking';
import MyBooking from './components/Home/MyBooking/MyBooking';
import ManageBooking from './components/Home/ManageBooking/ManageBooking';
import AddTour from './components/Home/AddTour/AddTour';

function App() {
  return (
    <div className="App mb-0 w-100">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'><Home></Home></Route>
            <Route exact path='/home'><Home></Home></Route>
            <Route exact path='/signin'><Signin></Signin></Route>
            <Route exact path='/register'><Register></Register></Route>
            <Route exact path='/tours'><Tours></Tours></Route>
            <PrivateRoute exact path="/tourbooking"><TourBooking></TourBooking></PrivateRoute>
            <PrivateRoute path="/tourbooking/:tourId"><TourBooking></TourBooking></PrivateRoute>
            <PrivateRoute exact path="/myBooking"><MyBooking></MyBooking></PrivateRoute>
            <PrivateRoute exact path="/manageBooking"><ManageBooking></ManageBooking></PrivateRoute>
            <PrivateRoute exact path="/addTour"><AddTour></AddTour></PrivateRoute>
            <Route exact path='/deals'><Deals></Deals></Route>
            <Route exact path='/rewards'><Rewards></Rewards></Route>
            <Route path='*'><NotFound></NotFound></Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
