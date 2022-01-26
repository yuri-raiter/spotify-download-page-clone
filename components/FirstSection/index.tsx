import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function FirstSection() {
  return (
    <Flex w='full' bg='green.200'>
      <VStack w='full' color='black' py={28} spacing={10}>
        <Image
          src='/laptop.svg'
          width={140}
          height={80}
          alt='Laptop image'
        />
        <VStack spacing={6}>
          <Heading fontSize={{ sm: '3xl', md: '4xl', lg: '5xl' }}>Download Spotify</Heading>
          <Text>Play millions of songs and podcasts on your device.</Text>
        </VStack>
        <Button 
          bg='white' 
          fontSize='sm' 
          fontWeight='bold' 
          borderRadius='full' 
          px={8} py={6} 
          _hover={{ transform: 'scale(1.1)', background: 'rgba(255, 255, 255, 0.9)' }}
          >
            Download
          </Button>
      </VStack>
    </Flex>
  )
}