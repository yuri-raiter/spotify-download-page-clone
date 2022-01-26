import { Icon, IconProps } from "@chakra-ui/react";

export default function TwitterIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 22 19" boxSize={6} cursor='pointer' {...props}>
      <path d="M22 0.999985C21.0424 1.67546 19.9821 2.19209 18.86 2.52999C18.2577 1.8375 17.4573 1.34668 16.567 1.12391C15.6767 0.901145 14.7395 0.957181 13.8821 1.28444C13.0247 1.6117 12.2884 2.19439 11.773 2.9537C11.2575 3.71302 10.9877 4.61232 11 5.52998V6.52998C9.24263 6.57555 7.50127 6.1858 5.93101 5.39543C4.36074 4.60506 3.01032 3.43862 2 1.99998C2 1.99998 -2 11 7 15C4.94053 16.398 2.48716 17.0989 0 17C9 22 20 17 20 5.49998C19.9991 5.22144 19.9723 4.94358 19.92 4.66999C20.9406 3.66348 21.6608 2.3927 22 0.999985V0.999985Z" fill="currentColor" />
    </Icon>
  )
}