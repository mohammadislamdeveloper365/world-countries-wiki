import './App.css';
import Header from './components/header/Header';
import CountryContainer from './components/countries-container/CountryContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
   <div>
      <Navbar/>
      <Header header="World Country Details"/>
      <CountryContainer/>
   </div>
  );
}

export default App;
