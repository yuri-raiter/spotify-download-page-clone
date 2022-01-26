import { VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Footer from '../components/Footer'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <VStack spacing={0} overflowX='hidden'>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </VStack>
  )
}

export default Home
