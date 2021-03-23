//Importing styles
import styled from "styled-components";
import { About } from "../Styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I stat?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit, animi!
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Daily Schedulw</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit, animi!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different payment methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit, animi!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What product do you offer?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit, animi!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
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
