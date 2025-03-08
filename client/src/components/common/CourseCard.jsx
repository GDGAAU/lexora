const CourseCard = ({ year, imageSrc, altText }) => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      {/* Image Section */}
      <div className="w-full h-40">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{year}</h2>
        <p className="text-gray-500 text-sm mt-2">
          Explore the subjects and materials for {year}.
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
