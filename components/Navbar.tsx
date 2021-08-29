import {
  Heading,
  Box,
  Flex,
  Link,
  Image,
  ListItem,
  ListIcon,
  List,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { FaEllipsisH } from "react-icons/fa";
import SearchModal from "./SearchModal";
import { useHotkeys } from "react-hotkeys-hook";

export default function Navbar() {
  return (
    <Box as="header" width="100%" color="white" overflowY="visible">
      <Flex className="header-wrap">
        <Box className="header-logo">
          <Heading as="h1" margin="0" lineHeight="0">
            <Link href="/" display="inline-block">
              <Image
                src="bankless-logo.png"
                alt="Bankless"
                maxW="300px"
                maxH="60px"
              />
            </Link>
          </Heading>
        </Box>
        <Box className="header-nav">
          <Flex as="nav" id="mobile-nav">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="site navigation menu"
                icon={<HamburgerIcon />}
                fontSize="32px"
                backgroundColor="transparent"
                sx={{
                  _hover: { background: "transparent" },
                  _active: { background: "transparent" },
                }}
              />
              <MenuList
                zIndex={1}
                borderRadius={0}
                background="var(--bg-nav)"
                border="none"
                fontSize="14px"
                width="200px"
              >
                <MenuItem justifyContent="flex-end">
                  <Link href="/">Home</Link>
                </MenuItem>
                <MenuItem justifyContent="flex-end">
                  <Link href="/guilds">Guilds</Link>
                </MenuItem>
                <MenuItem justifyContent="flex-end">
                  <Link href="/contribute">Contribute</Link>
                </MenuItem>
                <MenuItem justifyContent="flex-end">
                  <Link href="/signup">Register for Free</Link>
                </MenuItem>
                <MenuItem justifyContent="flex-end">
                  <Link href="/signin">Sign In</Link>
                </MenuItem>
                <MenuItem
                  justifyContent="flex-end"
                  color="var(--bg-nav)"
                  background="var(--color-details)"
                >
                  Search
                  <ListIcon
                    as={Search2Icon}
                    color="var(--bg-nav)"
                    marginLeft="10px"
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Flex as="nav">
            <List>
              <ListItem>
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="/guilds">Guilds</Link>
              </ListItem>
              <ListItem>
                <Link href="/contribute">Contribute</Link>
              </ListItem>
            </List>
            <List>
              <ListItem className="signup global-button">
                <Link href="/signup">Register for Free!</Link>
              </ListItem>
              <ListItem className="signin">
                <Link href="/signin">Sign In</Link>
              </ListItem>
              <ListItem>
                <SearchButton />
              </ListItem>
            </List>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

function SearchButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useHotkeys("/", (e) => {
    e.preventDefault();
    onOpen();
  });
  return (
    <>
      <Button variant="unstyled" _focus={{ outline: "none" }} onClick={onOpen}>
        <ListIcon as={Search2Icon} color="white" />
      </Button>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
