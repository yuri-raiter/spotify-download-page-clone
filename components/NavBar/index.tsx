import { Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { HamburgerIcon } from '@chakra-ui/icons'

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container maxW='full' bg='black' centerContent p={0}>
      <HStack w='full' maxW='6xl' justifyContent='space-between' px={3} py={5} display={{ sm: 'none', md: 'none', lg: 'flex' }}>
        <Image
          src='/logo.svg'
          width={140}
          height={40}
          alt='Spotify logo'
        />
        <HStack spacing={9}>
          <Text fontWeight='bold' _hover={{ color: 'green.400' }} cursor='pointer'>Premium</Text>
          <Text fontWeight='bold' _hover={{ color: 'green.400' }} cursor='pointer'>Support</Text>
          <Text fontWeight='bold' _hover={{ color: 'green.400' }} cursor='pointer'>Download</Text>
          <Divider orientation='vertical' h='1rem' borderColor='white' />
          <Text fontWeight='bold' _hover={{ color: 'green.400' }} cursor='pointer'>Sign up</Text>
          <Text fontWeight='bold' _hover={{ color: 'green.400' }} cursor='pointer'>Log in</Text>
        </HStack>
      </HStack>
      <HStack w='full' maxW='6xl' justifyContent='space-between' px={{ sm: 5, md: 20 }} py={3} display={{ sm: 'flex', md: 'flex', lg: 'none' }}>
        <Image
          src='/logo.svg'
          width={90}
          height={30}
          alt='Spotify logo'
        />
        <HamburgerIcon boxSize={7} color='white' cursor='pointer' onClick={onOpen} />
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement='right'
        size='sm'
        onClose={onClose}
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent bg='black'>
          <DrawerCloseButton size='lg'/>
          <DrawerBody>
            <VStack h='full' align='start' justify='space-between' px={3} py={5}>
              <VStack align='start' spacing={9}>
                <VStack align='start' fontSize='4xl' fontWeight='medium'>
                  <Text _hover={{ color: 'green.400' }} cursor='pointer'>Premium</Text>
                  <Text _hover={{ color: 'green.400' }} cursor='pointer'>Support</Text>
                  <Text _hover={{ color: 'green.400' }} cursor='pointer'>Download</Text>
                </VStack>
                <Divider borderColor='white' w={5}/>
                <VStack align='start' fontSize='3xl' fontWeight='regular' color='whiteAlpha.800'>
                  <Text _hover={{ color: 'green.400' }} cursor='pointer'>Sign up</Text>
                  <Text _hover={{ color: 'green.400' }} cursor='pointer'>Log in</Text>
                </VStack>
              </VStack>
              <Image
                src='/logo.svg'
                width={90}
                height={30}
                alt='Spotify logo'
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}