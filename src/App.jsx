import './App.css';
import Opener from './components/Opener';
import Title from './components/Title';
import Navbar from './components/Navbar';
import PageOne from './components/PageOne';
import Gradient from './components/Gradient';

function App() {
  return (
    <>
      <Opener className="front" />
      <Title />
      <Navbar />
      <PageOne />
      <Gradient />
    </>
  );
}

export default App;
