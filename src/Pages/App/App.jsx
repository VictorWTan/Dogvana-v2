import SponsorBar from '../../Components/SponsorBar/SponsorBar';
import '../App/App.scss';
import Navbar from '../../Components/Navbar/Navbar';
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';
import PetCardButtons from '../../Components/PetCardButtons/PetCardButtons';
import PurpleBanner from '../../Components/PurpleBanner/PurpleBanner';

function App() {
  return (
    <div className="App">
      <SponsorBar/>
      <Navbar/>
      <BackgroundImage/>
      <PurpleBanner/>
      <PetCardButtons/>
    </div>
  );
}

export default App;
