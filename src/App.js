import './App.css';
import Header from './components/header/Header';
import CountryContainer from './components/countries-container/CountryContainer';

function App() {
  return (
   <div>
      <Header header="World Country Details"/>
      <CountryContainer/>
   </div>
  );
}

export default App;
