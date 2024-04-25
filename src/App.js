
import './App.css';
import { Advantages } from './components/Advantages';
import { Catalog } from './components/Catalog';
import { Citation } from './components/Citation';
import { Footer } from './components/Footer';
import { MainPage } from './components/MainPage';
import { Navbar } from './components/Navbar';
import { News } from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Catalog />
      <Advantages />
      <News />
      <Citation />
      <Footer />
    </div>
  );
}

export default App;
