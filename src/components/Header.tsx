import { useId } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

import "./Header.css";
import useScrollDirection from "../hooks/useScrollDirection";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const socialsId = useId();

  const direction = useScrollDirection();

  const handleClick = (anchor: string) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const top = direction === "up" ? 0 : -200;

  return (
    <Box
      position='fixed'
      top={top}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'>
      <Box color='white' maxWidth='1280px' margin='0 auto' alignItems='center'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
          display='flex'
          flexDirection={{ sm: "column", md: "row", lg: "row" }}>
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map(({ icon, url }, index) => (
              <a
                className='header-icon'
                href={url}
                target='_blank'
                key={`${index}-${socialsId}`}>
                <FontAwesomeIcon icon={icon} size='2x' />
              </a>
            ))}
          </nav>
          <nav>
            <HStack
              mt={{ sm: 4, md: 0 }}
              spacing={8}
              display='flex'
              justifyContent='space-between'
              alignItems='center'>
              {/* Add links to Projects and Contact me section */}
              <a
                href='/#projects-section'
                id='header-projects'
                onClick={handleClick("projects")}>
                Projects
              </a>
              <a
                href='/#contact-me'
                id='header-contactme'
                onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
