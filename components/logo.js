import Link from 'next/link'
import Image from 'next/image'
import {Text,useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import logo from '../images/logo.png'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    img {    
    border-radius: 50%;
    transition: 200ms ease;
    }
    &:hover img{
        transform: scale(1.3)
    }`

const Logo =() => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logo} width={25} height={25} alt='logo' />
                    <Text color='whiteAlpha.900' fontFamily='Fira Sans Condensed' fontWeight='bold' ml={3}>
                    Fiser Lab
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
export default Logo 