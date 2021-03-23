import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <h1 id="logo">
        <a href="#">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
        </li>
      </ul>
    </Nav>
  );
};
const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: #282828;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    list-style: none;
    display: flex;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
`;
export default Navbar;
