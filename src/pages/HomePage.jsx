import BgHeader from '../assets/images/Bg-Header.png';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <img className="bg-cover" src={BgHeader} alt="" />
    </div>
  );
};

export default HomePage;
