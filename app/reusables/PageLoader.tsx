import React from 'react';
const PageLoader = () => {
    return (
        <>
            <style>{`
    .loader {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      border: 2px solid #FF3D00;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 4px;
      top: 4px;
      border: 2px solid #FFF;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
        
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
    `}</style>

            <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-white">

                <span className="loader"></span>
            </div>
        </>

    );
};

export default PageLoader;
