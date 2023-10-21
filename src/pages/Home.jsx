import HomeIntro from "../components/HomeIntro";
import Services from "../components/Services";
import Testimonies from "../components/Testimonies";

const Home = () => {
  return (
    <div className="bg-main-cream pt-32 flex flex-col gap-32 lg:px-10">
      <HomeIntro />
      <Services />
      <Testimonies />
    </div>
  );
};

export default Home;
