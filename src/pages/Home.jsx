import HeroCard from "../components/home/HeroCard";
import PhotoCard from "../components/home/PhotoCard";
import StatusCard from "../components/home/StatusCard";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 min-h-screen">
      {" "}
      <HeroCard className="col-span-2" />
      <PhotoCard className="col-span-1" />
      <StatusCard className="col-span-1" />
    </div>
  );
};

export default Home;
