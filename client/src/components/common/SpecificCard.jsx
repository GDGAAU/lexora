import React from "react";

function SpecificCard({ description, title, imageSrc, altText }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 bg-gray-200 w-80">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default SpecificCard;
