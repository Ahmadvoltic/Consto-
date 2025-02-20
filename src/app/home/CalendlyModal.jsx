import React, { useEffect } from 'react';

const CalendlyModal = ({ closeModal }) => {
    useEffect(() => {
        // Adding the Calendly script after component mounts to ensure it's only loaded on the client-side
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on modal close
        };
    }, []);

    return (
        <div className="popup-overlay" onClick={closeModal}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>✖</button>
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/ahmadhussnain/constructo"
                    style={{ minWidth: '320px', height: '700px' }}
                ></div>
            </div>
            <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          transition: opacity 0.3s ease;
        }

        .popup-content {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          width: 90%;
          max-width: 1200px;
          animation: slideIn 0.3s ease-out;
          position: relative;
        }

        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .close-button {
        //   background: #e74c3c;
          color: black;
          border: none;
    //          width: 50px;
    // height: 50px;
    // line-height: 50px;
          border-radius: 50%;
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.2s;
        }

        // .close-button:hover {
        //   background: #c0392b;
        // }

        .calendly-inline-widget {
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .popup-content {
            width: 100%;
            height: 80%;
          }
        }
      `}</style>
        </div>
    );
};

export default CalendlyModal;

