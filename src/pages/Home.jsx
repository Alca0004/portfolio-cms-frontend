import HeroCard from "../components/home/HeroCard";
import PhotoCard from "../components/home/PhotoCard";
import ProjectCard from "../components/home/ProjectCard";
import StatusCard from "../components/home/StatusCard";
import SkillsCard from "../components/home/SkillsCard";
import BioCard from "../components/home/BioCard";
import MusicCard from "../components/home/MusicCard";
import CTACard from "../components/home/CTACard";

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 items-start">
      {" "}
      <HeroCard className="col-span-2" />
      <PhotoCard className="col-span-1" />
      <StatusCard className="col-span-1" />
      <ProjectCard
        className="col-span-2"
        title="Portfolio CMS"
        description="A full stack portfolio manager built with React, Node and MongoDB."
      />
      <ProjectCard
        className="col-span-1"
        title="Figma / Design"
        description="UI/UX design work and prototypes built in Figma."
      />
      <SkillsCard className="col-span-1" />
      <BioCard className="col-span-1" />
      <MusicCard className="col-span-1" />
      <CTACard className="col-span-2" />
    </div>
  );
};

export default Home;
