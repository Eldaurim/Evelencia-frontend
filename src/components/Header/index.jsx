import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoStyle = styled(Link)`
  text-decoration: none;
  margin-block: auto;
  font-size: 32px;
  color: #005aee;
`

const HeaderStyle = styled.nav`
  display: flex;
  font-size: 22px;
  font-weight: bold;
`

const LinkStyle = styled(Link)`
  margin-block: auto;
  color: black;
  padding: 15px;
  text-decoration: none;
`

const NavStyle = styled.div`
  margin-left: auto;
  margin-block: auto;
`

function Header() {
  return (
    <HeaderStyle>
      <LogoStyle to='/'>Evelencia</LogoStyle>
      <NavStyle>
        <LinkStyle to='/login'>Connexion</LinkStyle>
        <LinkStyle to='/signup'>S'inscrire</LinkStyle>
      </NavStyle>
    </HeaderStyle>
  )
}

export default Header
