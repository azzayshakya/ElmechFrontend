import './index.css';

const LogoLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="circle-loader">
          <div className="circle-outer"></div>
          <div className="circle-middle"></div>
        </div>

        <div className="logo-center">
          <img src="/src/assets/elmechSmallicon.png" alt="Company Logo" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default LogoLoader;
