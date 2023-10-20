import HomeIntro from "../components/HomeIntro";
import Services from "../components/Services";
import Testimonies from "../components/Testimonies";

const Home = () => {
  return (
    <div className="bg-main-cream px-10 pt-20 flex flex-col gap-32">
      <HomeIntro />
      <Services />
      <Testimonies />
    </div>
  );
};

export default Home;
