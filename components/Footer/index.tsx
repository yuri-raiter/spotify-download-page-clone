import { Container, Heading, HStack, Stack, Text, VStack, Wrap } from "@chakra-ui/react";
import Image from "next/image";
import SocialIcons from "../SocialIcons";

export default function Footer() {
  return (
    <Container maxW='full' bg='black' centerContent px={{ sm: 5, md: 10, lg: 10 }} pt={24} pb={12}>
      <VStack maxW='6xl' w='full' spacing={{ sm: 10, md: 32, lg: 32 }}>
        <Stack direction={{ sm: 'column', md: 'column', lg: 'row' }} w='full' justifyContent='space-between' alignItems='start' spacing={28}>
          <Stack direction={{ sm: 'column', md: 'column', lg: 'row' }} alignItems='start' spacing={10}>
            <Image
              src='/logo.svg'
              width={130}
              height={40}
              alt='Spotify Logo'
            />
            <Stack direction={{ sm: 'column', md: 'row', lg: 'row' }} alignItems='start' spacing={{ sm: 20, md: 40, lg: 20 }}>
              <VStack alignItems='start' spacing={5}>
                <Heading fontSize='sm' color='gray.400'>COMPANY</Heading>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>About</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Jobs</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>For the Record</Text>
              </VStack>
              <VStack alignItems='start' spacing={5}>
                <Heading fontSize='sm' color='gray.400'>COMMUNITIES</Heading>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>For Artists</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Developers</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Advertising</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Investors</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Vendors</Text>
              </VStack>
              <VStack alignItems='start' spacing={5}>
                <Heading fontSize='sm' color='gray.400'>USEFUL LINKS</Heading>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Support</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Web Player</Text>
                <Text _hover={{ color: 'green.400' }} cursor='pointer'>Free Mobile App</Text>
              </VStack>
            </Stack>
          </Stack>
          <SocialIcons />
        </Stack>
        <HStack w='full' fontSize={{ sm: '0.6rem', md: 'xs', lg: 'xs' }} color='gray.400' justify='space-between'>
          <Wrap shouldWrapChildren spacing={5}>
            <Text _hover={{ color: 'green.400' }} cursor='pointer'>Legal</Text>
            <Text _hover={{ color: 'green.400' }} cursor='pointer'>Privacy Center</Text>
            <Text _hover={{ color: 'green.400' }} cursor='pointer'>Privacy Policy</Text>
            <Text _hover={{ color: 'green.400' }} cursor='pointer'>Cookies</Text>
            <Text _hover={{ color: 'green.400' }} cursor='pointer'>About Ads</Text>
            <Text _hover={{ color: 'green.400' }} cursor='pointer'>Additional CA Privacy Disclosures</Text>
          </Wrap>
          <VStack align='end'>
            <HStack>
              <Image
                src='/globe.svg'
                width={12}
                height={12}
                alt='Globe symbol'
              />
              <Text>USA</Text>
            </HStack>
            <Text>&#169;2021 Spotify AB</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  )
}