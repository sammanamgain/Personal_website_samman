import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (

    <VStack
      color='black'
      backgroundColor='white'
      cursor='pointer'
      borderRadius='xl'>
      <Image src={imageSrc} borderRadius='xl' />
      <VStack spacing={4} p={4} alignItems='flex-start'>
        <HStack justifyContent='space-between' alignItems='center'>
          <Heading as='h3' size='md' >{title}</Heading>
        </HStack>
        <Text color='#64748B'>{description}</Text>
        <HStack><p> See More</p>
        <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon></HStack>
      </VStack>
      
  </VStack>
  );
};

export default Card;