import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './Pages/login/Login';
import Gallery from './Pages/Gallery/Gallery'

function App() {
  if (localStorage.getItem('jwt')) {
    return (
      <Gallery></Gallery>
    );
  }
  return (
    <Login></Login>
  );
}

export default App;
