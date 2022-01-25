import React from 'react'
import styled from 'styled-components'
import { Box } from './Box.jsx'
import { Button } from './Button.jsx'
const NavigationBar = styled.nav`
  padding: 0 3rem;
`

const Logo = styled.img``
const LinksList = styled.ul`
  display: flex;
`
const LinksListItems = styled.li`
  display: flex;
`

const Name = styled.p`
  padding-left: 10px;
  font-size: 2rem;
  line-height: 29px;
  color: #fff;
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  margin: auto 5rem;
  font-size: 1.2rem;
  line-height: 22px;
`

export const Navbar = () => (
  <Box>
    <NavigationBar>
      <LinksList>
        <LinksListItems>
          <Logo src="./logo.svg" alt="logo" />
          <Name>sid</Name>
        </LinksListItems>
        <Box ml="auto" display="flex">
          <LinksListItems>
            <Link>Home</Link>
          </LinksListItems>
          <LinksListItems>
            <Link>About</Link>
          </LinksListItems>
          <LinksListItems>
            <Link>Type Of House</Link>
          </LinksListItems>
          <LinksListItems>
            <Link>Contact</Link>
          </LinksListItems>
          <Button variant="primary">Get Started</Button>
        </Box>
      </LinksList>
    </NavigationBar>
  </Box>
)
