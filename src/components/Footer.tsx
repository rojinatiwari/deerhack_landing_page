import React from 'react';

interface FooterLink {
  id: number;
  text: string;
  href: string;
}

interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      id: 1,
      title: 'Features',
      links: [
        { id: 1, text: 'Clipboard Sync', href: '#features' },
        { id: 2, text: 'File Transfer', href: '#features' },
        { id: 3, text: 'Remote Control', href: '#features' },
        { id: 4, text: 'Presentation Control', href: '#features' }
      ]
    },
    {
      id: 2,
      title: 'Support',
      links: [
        { id: 1, text: 'Documentation', href: '#' },
        { id: 2, text: 'GitHub', href: '#' },
        { id: 3, text: 'Issues', href: '#' },
        { id: 4, text: 'Contact', href: '#' }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-network-wired"></i>
              <span>SyncBridge</span>
            </div>
            <p>
              Cross-device control and sync system for seamless local network
              communication.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.id} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="footer-link"
                    >
                      {link.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 SyncBridge. All rights reserved. Built with ❤️ for
            seamless cross-device control.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  