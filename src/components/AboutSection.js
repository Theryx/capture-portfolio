import home1 from "../img/home1.png";
const Aboutsection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>Dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professonals with amazing skils
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src="{home1}" alt="Guy with the camera" />
      </div>
    </div>
  );
};

export default Aboutsection;
