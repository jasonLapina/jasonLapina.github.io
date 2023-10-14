import React from "react";

import { HStack, Icon, Tooltip, Box, Tag, Button } from "@chakra-ui/react";

import {
  BiSolidUser,
  BiSolidHome,
  BiSolidWrench,
  BiSolidFolder,
  BiSolidPhone,
} from "react-icons/bi";
import MotionBox from "./MotionBox";
import { DownloadIcon } from "@chakra-ui/icons";
function Navbar() {
  const sections = [
    { label: "Home", icon: BiSolidHome },
    {
      label: "About",
      icon: BiSolidUser,
    },
    {
      label: "Skills",
      icon: BiSolidWrench,
    },
    {
      label: "Projects",
      icon: BiSolidFolder,
    },
    {
      label: "Contact",
      icon: BiSolidPhone,
    },
  ];
  const handleNav = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionBox
      display='flex'
      alignItems='center'
      w='fit-content'
      pos='fixed'
      mx='auto'
      borderRadius='full'
      zIndex={5}
      left='50%'
      bgColor='blackAlpha.600'
      transform='translateX(-50%)'
      backdropFilter='auto'
      backdropBlur='8px'
      px='40px'
      py='20px'
      gap='16px'
      justify='center'
      initial={{ opacity: 0, bottom: "-80px" }}
      animate={{
        opacity: 1,
        bottom: "40px",
      }}
      transition={{
        duration: 1,
        delay: 1.2,
      }}
    >
      {sections.map((item) => (
        <Tooltip
          fontSize='16px'
          arrowSize='15'
          placement='top'
          label={item.label}
          hasArrow
          key={item.label}
        >
          <CustomCard onClick={() => handleNav(item.label)} cursor='pointer'>
            <Icon fontSize='24px' color='coral' as={item.icon} />
          </CustomCard>
        </Tooltip>
      ))}
      <Tooltip
        fontSize='16px'
        arrowSize='15'
        placement='top'
        label={"Download resume"}
        hasArrow
      >
        <Box download href='Jason Lapina - Resume.pdf' as='a'>
          <DownloadIcon fontSize='24px' color='coral' />
        </Box>
      </Tooltip>
    </MotionBox>
  );
}

export default Navbar;

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box>
    <Tag bg='none' ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));
