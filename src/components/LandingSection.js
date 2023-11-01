import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Samman Amgain";
const bio1 = "A Fullstack developer";
const bio2 = "I have experience with Nodejs, JavaScript,React and Flutter";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center">


      <Avatar size="2xl" name="Samman" src="sammanamgain-modified (1).png" />
      <Heading as="h1" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <VStack spacing={6}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          {bio1}
        </Heading>)
        <Heading as="h5" size="1xl" noOfLines={2}>
          {bio2}
        </Heading>
      </VStack>


    </VStack>
  </FullScreenSection>

);

export default LandingSection;
