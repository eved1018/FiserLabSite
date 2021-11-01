import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
  } from '@chakra-ui/react'

import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
// E8AEAE

const LinkItem = ({ href, path, _target,children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
    return(
    <NextLink href={href} passHref>
        <Link
            p={2}
            // bg={active ? '#E8AEAE' : undefined}
            color={active ? '#202023' : inactiveColor}
            _target={_target}
            {...props}
        >
            {children}
        </Link>
    </NextLink>
        
        )}

const Navbar = props => {
    const { path } = props
    
    return(

    <Box
        position='fixed'
        w='100%'
        as='nav'
        
        bg={useColorModeValue('#A9A9A9', '#4c5270')}
        style={{backdropFilter:'blur{10px}'}}
        zIndex={1}
        {...props}> 
        <Container display='flex' p={2}  maxW='container.md'
         wrap='wrap' align='center' justify='space-between' >

        <Flex align="center" mr={5}>
            <Heading as='h1' size='lg' letterSpacing={'tighter'}>
                <Logo />
            </Heading>
        </Flex> 
                
                <Stack 
                    direction={{base:'column',md:'row'}}
                    display={{base:'none',md:'flex'}}
                    width={{base:'full',md:'auto'}}
                    alignItems='center'
                    flexGrow={1}
                    mt={{base:4,nmd: 0 }}>   
                    
                        <LinkItem href="/team" path={path}>
                            Our Team 
                        </LinkItem>
                        <LinkItem href="/programs" path={path}>
                            Programs/Servers
                        </LinkItem>

                        <LinkItem href="/publications" path={path}>
                            Publications
                        </LinkItem>

                        <LinkItem href="/links" path={path}>
                            Links
                        </LinkItem>

                        <LinkItem href="/contact" path={path}>
                            Contact Us
                        </LinkItem>
                        
                </Stack>
                    <Box flex={1} align='right'>
                        <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}} >
                    
                        <Menu isLazy id="navbar-menu">
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} vairiant="outline" aria-label="Options"  
                            _hover={{ bg: "lightblue", color: " white" }}
                             _active={{ transform: "rotate(0.5turn)" }} >

                                 
                             </MenuButton>
                            <MenuList> 
                            <NextLink href="/" passHref>
                                <MenuItem as={Link}>Home</MenuItem>
                            </NextLink>
                            <NextLink href="/team" passHref>
                                <MenuItem as={Link}>Our Team </MenuItem>
                            </NextLink>
                            <NextLink href="/programs" passHref>
                                <MenuItem as={Link}>Programs/Servers</MenuItem>
                            </NextLink>
                            <NextLink href="/publications" passHref>
                                <MenuItem as={Link}>Publications</MenuItem>
                            </NextLink>
                            <NextLink href="/links" passHref>
                                <MenuItem as={Link}>Links</MenuItem>
                            </NextLink>
                            <NextLink href="/contact" passHref>
                                <MenuItem as={Link}>Contact Us</MenuItem>
                            </NextLink>

                            </MenuList>
                        </Menu>
                    </Box>
            </Box>
        </Container>
    </Box>
    )}

export default Navbar

