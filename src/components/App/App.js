import './App.css';
import Header from "../Header/Header"
import Slide from "../Slide/Slide"
import Stocks from '../Stocks/Stocks';
import Advantages from '../Advantages/Advantages';
import Documentation from '../Documentation/Documentation';
import Scheme from '../Scheme/Scheme';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Slide />
      <Stocks />
      <Advantages />
      <Documentation />
      <Scheme />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
