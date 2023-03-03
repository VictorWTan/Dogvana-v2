import SponsorBar from '../../Components/SponsorBar/SponsorBar';
import '../App/App.scss';
import Navbar from '../../Components/Navbar/Navbar';
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';

function App() {
  return (
    <div className="App">
      <SponsorBar/>
      <Navbar/>
      <BackgroundImage/>
    </div>
  );
}

export default App;
