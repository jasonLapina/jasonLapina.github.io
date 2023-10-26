import {
  Box,
  Center,
  Grid,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import MySection from "./UI/MySection";

import MyTypewriter from "./UI/MyTypewriter";
function Skills() {
  const genSkills = [
    {
      title: "Design",
      text: "An expert at web & mobile design that finds the perfect balance between aesthetic and user experience. I use figma for wireframing and high-fidelity prototypes.",
      img: "/assets/skills/design.svg",
    },
    {
      title: "Develop",
      text: "An experienced web developer that specializes on the front-end. Mastery of HTML, CSS, Javascript, and it's frameworks such as React and Next.js",
      img: "/assets/skills/develop.svg",
    },
  ];
  const skills = [
    { icon: "/assets/skills/figma.svg", label: "Figma" },
    { icon: "/assets/skills/html.svg", label: "HTML5" },
    { icon: "/assets/skills/css.svg", label: "CSS3" },
    { icon: "/assets/skills/js.svg", label: "Javascript" },
    { icon: "/assets/skills/ts.svg", label: "Typescript" },
    { icon: "/assets/skills/react.svg", label: "React" },
    { icon: "/assets/skills/jest.svg", label: "Jest" },
    { icon: "/assets/skills/next.svg", label: "Next.js" },
    { icon: "/assets/skills/git.svg", label: "Git & Github" },
    { icon: "/assets/skills/aws.svg", label: "Amazon Web Services" },
    { icon: "/assets/skills/node.svg", label: "Node" },
    { icon: "/assets/skills/mongodb.svg", label: "MongoDB" },
  ];

  return (
    <Box id='Skills'>
      <MySection heading='skills'>
        <MyTypewriter words={["My tech stack"]} />
        <Center pos='relative' my='80px'>
          <Image
            data-aos='fade-up'
            src='/assets/skills-invo.png'
            borderRadius='full'
            filter={`drop-shadow(2px 2px 20px coral)`}
            maxW={{ base: "400px", md: "700px", lg: "1000px" }}
          />
          {skills.map((item, i) => (
            <Tooltip key={i} hasArrow label={item.label}>
              <Image
                data-aos='fade-in'
                data-aos-delay='500'
                w={{ base: "40px", md: "80px" }}
                key={item.icon}
                src={item.icon}
                pos='absolute'
                transform={{
                  md: `rotate(${
                    i * (360 / skills.length)
                  }deg) translateY(-280px) rotate(-${
                    i * (360 / skills.length)
                  }deg) !important`,
                  base: `rotate(${
                    i * (360 / skills.length)
                  }deg) translateY(-140px) rotate(-${
                    i * (360 / skills.length)
                  }deg) !important`,
                }}
                filter={`drop-shadow(2px 2px 8px cyan)`}
              />
            </Tooltip>
          ))}
        </Center>
        <Box mt='80px'>
          <MyTypewriter words={["What I do"]} />
          <Grid gridTemplateColumns='1fr 1fr'>
            {genSkills.map((item) => (
              <VStack>
                <Image maxW='200px' h='160px' p='16px' src={item.img} />
                <Text fontSize='32px' fontWeight='semibold'>
                  {item.title}
                </Text>
                <Text maxW='400px' mx='auto' opacity='.6'>
                  {item.text}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Box>
      </MySection>
    </Box>
  );
}

export default Skills;
