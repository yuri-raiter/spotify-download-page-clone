import { Circle, Flex, Heading, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";

export default function ThirdSection() {
  return (
    <Flex w='full' bg='gray.900'>
      <VStack w='full' px={{ sm: 10, md: 3, lg: 2 }} py={16} spacing={10}>
        <VStack spacing={3} textAlign='center'>
          <Image
            src='/all-devices.svg'
            width={500}
            height={200}
            alt='All devices'
          />
          <Heading>One account, listen everywhere.</Heading>
        </VStack>
        <Wrap direction={{ sm: 'column', md: 'row', lg: 'row' }} justify='center' align='center' spacing={5}>
          <WrapItem>
            <Text>MOBILE</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>COMPUTER</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>TABLET</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>CAR</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>PLAYSTATION</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>XBOX</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>TV</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>SPEAKER</Text>
          </WrapItem>
          <WrapItem display={{ sm: 'none', md: 'flex', lg:'flex' }}>
            <Circle size={1.5} bg='green.400' />
          </WrapItem>
          <WrapItem>
            <Text>WEB PLAYER</Text>
          </WrapItem>
        </Wrap>
      </VStack>
    </Flex>
  )
}