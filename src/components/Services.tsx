import React from 'react';
import { handleDownloadClick } from '../hooks/useAnimations';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}

interface SetupStep {
  id: number;
  number: number;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: 'fab fa-android',
      title: 'Mobile App',
      description: 'React Native app for Android',
      buttonText: 'Download APK'
    },
    {
      id: 2,
      icon: 'fab fa-python',
      title: 'Desktop App',
      description: 'Python backend for Windows/Linux/macOS',
      buttonText: 'Download'
    },
    {
      id: 3,
      icon: 'fab fa-chrome',
      title: 'Browser Extension',
      description: 'Chrome/Firefox extension for presentation control',
      buttonText: 'Install Extension'
    }
  ];

  const setupSteps: SetupStep[] = [
    {
      id: 1,
      number: 1,
      title: 'Install Desktop App',
      description: 'Download and run the Python desktop application on your laptop'
    },
    {
      id: 2,
      number: 2,
      title: 'Scan QR Code',
      description: 'Use your mobile app to scan the QR code displayed by the desktop app'
    },
    {
      id: 3,
      number: 3,
      title: 'Start Controlling',
      description: 'Begin using clipboard sync, file transfer, and remote control features'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Services</h2>
          <p>Download and set up your cross-device control system</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn btn-download" onClick={handleDownloadClick}>
                <i className="fas fa-download"></i>
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
        <div className="setup-steps">
          <h3>Quick Setup</h3>
          <div className="steps">
            {setupSteps.map((step) => (
              <div key={step.id} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;  