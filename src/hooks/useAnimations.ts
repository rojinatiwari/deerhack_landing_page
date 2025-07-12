import { useEffect, useRef } from 'react';

export const useAnimations = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Navbar background on scroll
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 50) {
          navbarRef.current.style.background = "rgba(255, 255, 255, 0.98)";
          navbarRef.current.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
        } else {
          navbarRef.current.style.background = "rgba(255, 255, 255, 0.95)";
          navbarRef.current.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
      ".feature-card, .component-card, .download-card, .step"
    );
    animateElements.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Device mockup animations
    const devices = document.querySelectorAll(".device");
    devices.forEach((device, index) => {
      (device as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      (device as HTMLElement).style.animation = "float 3s ease-in-out infinite";
    });

    // Add floating animation keyframes
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    // QR Code animation
    const qrCode = document.querySelector(".qr-pattern");
    if (qrCode) {
      const interval = setInterval(() => {
        (qrCode as HTMLElement).style.transform = "scale(1.05)";
        setTimeout(() => {
          (qrCode as HTMLElement).style.transform = "scale(1)";
        }, 200);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // Feature cards hover effect
    const featureCards = document.querySelectorAll(".feature-card");
    const handleMouseEnter = (card: Element) => {
      (card as HTMLElement).style.transform = "translateY(-10px) scale(1.02)";
    };

    const handleMouseLeave = (card: Element) => {
      (card as HTMLElement).style.transform = "translateY(0) scale(1)";
    };

    featureCards.forEach((card) => {
      card.addEventListener("mouseenter", () => handleMouseEnter(card));
      card.addEventListener("mouseleave", () => handleMouseLeave(card));
    });

    return () => {
      featureCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => handleMouseEnter(card));
        card.removeEventListener("mouseleave", () => handleMouseLeave(card));
      });
    };
  }, []);

  useEffect(() => {
    // Component cards interactive effect
    const componentCards = document.querySelectorAll(".component-card");
    const handleMouseEnter = (card: Element) => {
      const icon = card.querySelector(".component-icon");
      if (icon) {
        (icon as HTMLElement).style.transform = "rotate(5deg) scale(1.1)";
      }
    };

    const handleMouseLeave = (card: Element) => {
      const icon = card.querySelector(".component-icon");
      if (icon) {
        (icon as HTMLElement).style.transform = "rotate(0deg) scale(1)";
      }
    };

    componentCards.forEach((card) => {
      card.addEventListener("mouseenter", () => handleMouseEnter(card));
      card.addEventListener("mouseleave", () => handleMouseLeave(card));
    });

    return () => {
      componentCards.forEach((card) => {
        card.removeEventListener("mouseenter", () => handleMouseEnter(card));
        card.removeEventListener("mouseleave", () => handleMouseLeave(card));
      });
    };
  }, []);

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Typing effect for hero title
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      const text = heroTitle.textContent || "";
      heroTitle.textContent = "";

      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      };

      // Start typing effect after a short delay
      const timeout = setTimeout(typeWriter, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    // Counter animation for features
    const counters = document.querySelectorAll(".feature-card h3");
    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const count = parseInt((counter as HTMLElement).innerText || "0");
        const increment = target / 200;

        if (count < target) {
          (counter as HTMLElement).innerText = Math.ceil(count + increment).toString();
          setTimeout(animateCounters, 1);
        } else {
          (counter as HTMLElement).innerText = target.toString();
        }
      });
    };

    // Trigger counter animation when features section is visible
    const featuresSection = document.querySelector(".features");
    if (featuresSection) {
      const featuresObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounters();
              featuresObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      featuresObserver.observe(featuresSection);
      return () => featuresObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    // Add loading animation
    const handleLoad = () => {
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 100);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return { navbarRef, heroRef };
};

// Notification system
export const showNotification = (message: string, type: 'success' | 'info' = 'info') => {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${
        type === "success" ? "fa-check-circle" : "fa-info-circle"
      }"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
    notification.style.opacity = "1";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    notification.style.opacity = "0";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
};

// Download button click handler
export const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  const button = e.currentTarget;

  // Create ripple effect
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);

  // Show download notification
  showNotification("Download started!", "success");
}; 