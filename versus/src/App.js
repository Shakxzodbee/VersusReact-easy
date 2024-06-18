import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ImgItem from './components/ImgItem/ImgItem';
function App() {
  return (
    <div className='wrap'>
      <Header/>
      <ImgItem/>
      <Footer/>
    </div>
  );
}

export default App;
