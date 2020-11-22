import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topics from './components/Topics/Topics';
import PopularContent from './components/PopularContent/PopularContent';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Main />
        <Topics />
        <PopularContent />
      </div>
    </>
  );
}

export default App;
