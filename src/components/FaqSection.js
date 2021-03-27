import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
//Importing styles
import styled from "styled-components/macro";
import { About } from "../Styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle tittle='How do I stat?'>
          <div className='answer'>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Reprehenderit, animi!
            </p>
          </div>
        </Toggle>

        <Toggle tittle='Daily Schedule'>
          <div className='answer'>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Reprehenderit, animi!
            </p>
          </div>
        </Toggle>
        <Toggle tittle='Different payment methods'>
          <div className='answer'>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Reprehenderit, animi!
            </p>
          </div>
        </Toggle>
        <Toggle tittle='What product do you offer?'>
          <div className='answer'>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Reprehenderit, animi!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 0.5rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  h4 {
    font-size: 1.5rem;
  }
`;

export default FaqSection;
