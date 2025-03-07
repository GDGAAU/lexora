const CourseCard = ({ year, imageSrc, altText }) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">{year}</h2>
          <p className="text-gray-600 mb-4"></p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
