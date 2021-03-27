//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../pages/animation";
import styled from "styled-components";
const ContactUs = () => {
  return (
    <ContactStyled
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touche</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2>Send Us a message</h2>
            </Social>
          </Hide>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Give us a call</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  background-color: #353535;
  width: 2rem;
  height: 2rem;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 0.7rem;
  }
`;
export default ContactUs;
