import React, { useState, useEffect } from "react";
import api from "../services/api";
import HeroCard from "../components/home/HeroCard";
import PhotoCard from "../components/home/PhotoCard";
import ProjectCard from "../components/home/ProjectCard";
import StatusCard from "../components/home/StatusCard";
import SkillsCard from "../components/home/SkillsCard";
import BioCard from "../components/home/BioCard";
import MusicCard from "../components/home/MusicCard";
import CTACard from "../components/home/CTACard";

const Home = () => {
  const [projects, setProjects] = useState([]);

  const publishedProjects = projects.filter((project) => project.published);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-4 items-start">
      {" "}
      <HeroCard className="col-span-2" />
      <PhotoCard className="col-span-1" />
      <StatusCard className="col-span-1" />
      {publishedProjects.map((project) => (
        <ProjectCard
          key={project._id}
          className="col-span-1"
          title={project.title}
          description={project.description}
          githubUrl={project.githubUrl}
        />
      ))}
      <SkillsCard className="col-span-1" />
      <BioCard className="col-span-1" />
      <MusicCard className="col-span-1" />
      <CTACard className="col-span-2" />
    </div>
  );
};

export default Home;
