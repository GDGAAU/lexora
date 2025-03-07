import React from "react";

function SemiCoursesCard({title, imageSrc, altText ,courses}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 bg-gray-200 w-80">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="flex-1">
        <ul className="text-gray-600">
          {courses.map((course, index) => (
            
              <li key={index}>
                {course.name} ({course.code})
              </li>
           
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SemiCoursesCard;

