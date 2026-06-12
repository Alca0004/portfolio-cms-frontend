import HeroCard from "../components/home/HeroCard";
import PhotoCard from "../components/home/PhotoCard";
import ProjectCard from "../components/home/ProjectCard";
import StatusCard from "../components/home/StatusCard";
import SkillsCard from "../components/home/SkillsCard";
import BioCard from "../components/home/BioCard";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 items-start">
      {" "}
      <HeroCard className="col-span-2" />
      <PhotoCard className="col-span-1" />
      <StatusCard className="col-span-1" />
      <ProjectCard className="col-span-2" title="Portfolio HTML" />
      <ProjectCard className="col-span-1" title="Figma / Design" />
      <SkillsCard className="col-span-1" />
      <BioCard className="col-span-2" />
    </div>
  );
};

export default Home;
