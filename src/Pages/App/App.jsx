import SponsorBar from '../../Components/SponsorBar/SponsorBar';
import '../App/App.scss';
import Navbar from '../../Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <SponsorBar/>
      <Navbar/>
      <img src={require('../../Assets/dogvanacover.png')} alt="site cover photo" className='cover-photo'/>
    </div>
  );
}

export default App;
