import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Cross-Device LAN Control & Sync System</h1>
          <p className="hero-subtitle">
            Seamlessly connect your mobile, laptop, and browser over LAN without
            internet or third-party servers. Full local control with secure
            device pairing.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/share')}
            >
              <i className="fas fa-download"></i>
              Get Started
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('features')}
            >
              <i className="fas fa-play"></i>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="device-mockup">
            <div className="device phone">
              <div className="screen">
                <div className="app-interface">
                  <div className="status-bar"></div>
                  <div className="control-panel">
                    <div className="control-item">
                      <i className="fas fa-clipboard"></i>
                      <span>Clipboard</span>
                    </div>
                    <div className="control-item">
                      <i className="fas fa-mouse-pointer"></i>
                      <span>Touchpad</span>
                    </div>
                    <div className="control-item">
                      <i className="fas fa-keyboard"></i>
                      <span>Keyboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="device laptop">
              <div className="screen">
                <div className="desktop-interface">
                  <div className="menu-bar"></div>
                  <div className="content-area">
                    <div className="file-icon"></div>
                    <div className="file-icon"></div>
                    <div className="file-icon"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="device browser">
              <div className="screen">
                <div className="browser-interface">
                  <div className="browser-tabs">
                    <div className="tab active"></div>
                    <div className="tab"></div>
                  </div>
                  <div className="browser-content">
                    <div className="slide-controls">
                      <i className="fas fa-chevron-left"></i>
                      <span>Slide 1</span>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;  