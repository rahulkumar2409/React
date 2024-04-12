import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Intro2';


function HelloWorld() {
  return <h1>Hello World</h1>;
}

function App() {
  return <div>
  <Nav />
  <Promo off="60%" />
  <Intro1 />
  <Intro2 />
  <Intro3 />
  <Footer />

  <HelloWorld />
  </div>

}

export default App;
