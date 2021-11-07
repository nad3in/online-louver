import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Redirect } from "react-router";
import "./Assets/css/style.css"


function App() {
  if (localStorage.getItem('jwt')) {
    return (<Redirect to="/gallery" />);
  }
  return (<Redirect to="/" />);
}

export default App;
