import SponsorBar from '../../Components/SponsorBar/SponsorBar';
import '../App/App.scss';
import Navbar from '../../Components/Navbar/Navbar';
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';
import PetCardButtons from '../../Components/PetCardButtons/PetCardButtons';

function App() {
  return (
    <div className="App">
      <SponsorBar/>
      <Navbar/>
      <BackgroundImage/>
      <PetCardButtons/>
    </div>
  );
}

export default App;
