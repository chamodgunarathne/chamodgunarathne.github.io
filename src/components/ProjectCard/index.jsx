import React from 'react';

const Index = ({ imageSrc, title, description, link }) => {
  return (
    
      <div className="container flex justify-center">
        <div className="max-w-sm py-10">
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <img className="rounded-t-lg" src={imageSrc} alt="" />
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{title}</h1>
              <p className="text-gray-700 tracking-wide">{description}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-6 py-2 px-4 bg-blue-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Open Project</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Index;
