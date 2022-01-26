import { Flex, Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";

export default function SecondSection() {
  return (
    <Flex w='full' bg='white' color='black'>
      <VStack w='full' px={{ sm: 4, md: 2, lg: 2 }} py={20} spacing={7}>
        <VStack spacing={5} textAlign='center'>
          <Heading fontSize='3xl'>Bring your music to mobile and tablet, too.</Heading>
          <Text>Listening on your phone or tablet is free, and fun.</Text>
        </VStack>
        <Wrap spacing={5} justify='center'>
          <WrapItem cursor='pointer'>
            <Image
              src='/apple.png'
              width={135}
              height={45}
              alt='Apple App Store'
            />
          </WrapItem>
          <WrapItem cursor='pointer'>
            <Image
              src='/google-play.png'
              width={135}
              height={45}
              alt='Google Play Store'
            />
          </WrapItem>
          <WrapItem cursor='pointer'>
            <Image
              src='/microsoft.png'
              width={135}
              height={45}
              alt='Microsoft Store'
            />
          </WrapItem>
          <WrapItem cursor='pointer'>
            <Image
              src='/amazon.png'
              width={135}
              height={45}
              alt='Amazon App Store'
            />
          </WrapItem>
        </Wrap>
      </VStack>
    </Flex>
  )
}