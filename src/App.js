import './App.css';
import MainPage from './pages/MainPage'
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
