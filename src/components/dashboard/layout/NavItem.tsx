import type { FlexProps } from "@chakra-ui/react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
  icon: string;
  children: React.ReactNode;
  path?: string;
  iconActive: string;
  onClick?: () => void;
  isVisble?: boolean;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [onHover, setOnHover] = useState(false);
  return (
    <Box
      as="a"
      href={rest.path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={rest.onClick}
      display={rest.isVisble ? "block" : "none"}
    >
      <Flex
        align="center"
        p="3"
        mb="2"
        mx="4"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "bg.200",
          cursor: "pointer",
          borderLeftWidth: "4px",
          borderLeftColor: "secondary",
          transition: "all 0.3s ease",
        }}
        borderLeftWidth={pathname === rest.path || onHover ? "4px" : "0px"}
        borderLeftColor={"secondary"}
        bg={pathname === rest.path ? "bg.200" : "transparent"}
        color={onHover || pathname === rest.path ? "primary" : "subText.200"}
        fontWeight="500"
        fontSize="16px"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        {...rest}
      >
        <Image
          src={onHover || pathname === rest.path ? rest.iconActive : icon}
          alt="icon"
          width="24px"
          height="24px"
          mr="4"
        />

        {children}
      </Flex>
    </Box>
  );
};

export default NavItem;
