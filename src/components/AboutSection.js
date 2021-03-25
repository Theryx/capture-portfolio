import home1 from "../img/home1.png";
//Style
import styled from "styled-components/macro";
//Framer Motion
import { motion } from "framer-motion";

const Aboutsection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              Your <span>Dreams </span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professonals with amazing skils
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with the camera" />
      </Image>
    </About>
  );
};

//Styled Component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 4rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default Aboutsection;
