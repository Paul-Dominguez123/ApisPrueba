
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
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height:100vh;
  padding: 20px;
  display: flex;
  flex-direction:column;
  
  align-items:flex-start;
  z-index:1000;
 

  .logo {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    text-decoration: none;
    margin-bottom:20px;
  }

  .links {
    display: flex;
    flex-direction:column;
    margin-bottom:20px;
    font-size:20px;
    

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      margin-bottom: 15px;
      transition: all 0.3s ease;

      &:hover {
        color: #ff6600;
      }
    }
  }
`;
