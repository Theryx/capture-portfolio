import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <h1>
        <a href="#">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">2. Our Work</a>
        </li>
      </ul>
      <ul>
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
    display: flex;
    list-style: none;
  }
`;
export default Navbar;
