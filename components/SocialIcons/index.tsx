import { Circle, HStack } from "@chakra-ui/react";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";

export default function SocialIcons() {
  return (
    <HStack>
      <Circle size='3rem' bg='gray.900' role='group'>
        <InstagramIcon color='white' _groupHover={{ color: 'green.400' }}/>
      </Circle>
      <Circle size='3rem' bg='gray.900' role='group'>
        <TwitterIcon color='white' _groupHover={{ color: 'green.400' }}/>
      </Circle>
      <Circle size='3rem' bg='gray.900' role='group'>
        <FacebookIcon color='white' _groupHover={{ color: 'green.400' }}/>
      </Circle>
    </HStack>
  )
}