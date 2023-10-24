import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Icon 
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";


const NavLink = ({ path, children}) => (
  <Link
    as={ReactRouterLink}
    to={path}
    px={2}
    py={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >{children}</Link>
); //for navbar links 

const links = [
    {linkname : "Products", path : "/products"},
    {linkname : "Shopping Cart", path : "/cart"}
]

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          display={{ md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={() => {
            isOpen ? onClose() : onOpen();
          }}
        />

        <HStack>
          <Link as={ReactRouterLink} to="/">
            <Flex>
              <Text fontWeight={"extrabold"}>My Tech Mart</Text>
            </Flex>
          </Link>
          
          <HStack as={"nav"} spacing={4} display={{base : "none", md : "flex"}}>
            {links.map((link, i) => (
                <NavLink key={i} path={link.path}>
                    {link.linkname}
                </NavLink>
                 //<NavLink key={i} path={link.path} name={link.linkname} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
            <NavLink>
                <Icon as={colorMode === "light" ? MoonIcon : SunIcon } onClick={ ()=>{toggleColorMode()} }/>
            </NavLink>
            <Button as={ReactRouterLink} to={'/login'} p={2} fontSize="sm" fontWeight={400} variant={"link"}>Sign In</Button>
            <Button display={{base : "none", md : "inline-flex"}} as={ReactRouterLink} to={'/registration'} m={2} fontSize="sm" _hover={{bg : "orange.400"}} bg="orange.500">Sign Up</Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box>
            <Stack as="nav" spacing={4}>
                {links.map((link, i) => (
                    <NavLink key={i} path={link.path}>{link.linkname}</NavLink>
                ))}
                <NavLink key={1} path={"/registration"}>
                    Sign Up
                </NavLink>
            </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
