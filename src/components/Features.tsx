import React from 'react';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: 'fas fa-clipboard',
      title: 'Clipboard Sync',
      description: 'Instantly sync clipboard content between your mobile and laptop. Copy on phone, paste on desktop.'
    },
    {
      id: 2,
      icon: 'fas fa-file-upload',
      title: 'File Transfer',
      description: 'Transfer files between devices with chunked WebSocket transfer. No size limits, no cloud storage needed.'
    },
    {
      id: 3,
      icon: 'fas fa-mouse-pointer',
      title: 'Remote Input',
      description: 'Control your laptop with touchpad-style mouse and virtual keyboard from your mobile device.'
    },
    {
      id: 4,
      icon: 'fas fa-file-powerpoint',
      title: 'Presentation Control',
      description: 'Navigate slides in Google Slides, Canva, and other presentation tools with simple gestures.'
    },
    {
      id: 5,
      icon: 'fas fa-volume-up',
      title: 'Media Control',
      description: 'Control media playback, volume, and system audio from your mobile device.'
    },
    {
      id: 6,
      icon: 'fas fa-battery-three-quarters',
      title: 'Battery Sharing',
      description: 'Monitor battery levels across all connected devices in real-time.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Features</h2>
          <p>Everything you need for seamless cross-device control</p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;  