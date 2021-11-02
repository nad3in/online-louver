import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Redirect } from "react-router";
import Login from './Pages/login/Login';
import Gallery from './Pages/Gallery/Gallery'


function App() {
  if (localStorage.getItem('jwt')) {
    return (<Redirect to="/gallery" />);
  }
  return (<Redirect to="/" />);
  // return (
  //   // <Login></Login>
  // );
}

export default App;
