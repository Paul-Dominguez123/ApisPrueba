
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const NavBar = () => {
  return (
    <Nav>
      <div className="logo">Logo</div>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/productos'>Productos</Link>
        <Link to='/pokemon'>Pokemon</Link>
        <Link to='/rick'>Rick and Morty</Link>
      </div>
    </Nav>
  )
}


const Nav = styled.nav`
background-color: #eeeeee;
 position: sticky;
 top: 0;
 padding: 5px 20px ;
 border: 1px solid #000;
 display: flex;
 justify-content: space-between;

a{
  text-decoration: none;
  color: #000;
}

.logo{
  color: #000;
  font-size: 24px;
  font-weight: 700;
}

.links{
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

`;