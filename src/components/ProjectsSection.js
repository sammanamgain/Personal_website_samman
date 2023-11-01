import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Period Tracker using Flutter,Firebase and Time Series model",
    description:
      "It is used to track the period of a Girl , predict the next period based on Arima model and contains information portal and can see the calender of prediction and can log the",
    getImageSrc: () => require("../images/image.png"),
  },
  {
    title: "Simmons Game",
    description:
      "Simon is an electronic memory game with four colored buttons that play sequences of lights and sounds. Players must repeat the patterns correctly to progress and test their memory skills.",
    getImageSrc: () => require("../images/second.png"),
  },
  {
    title: "Expense Tracker in Python ",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Employee management using php",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
