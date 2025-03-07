export default function MyCourses() {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="ml-4 text-gray-500">Unlock Your Future</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Course Card 1 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src="https://via.placeholder.com/96"
                alt="year 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Year2</h2>
              <p className="text-gray-600 mb-4"></p>
              {/* <div className="flex gap-2">
                <span className="px-4 py-1 bg-gray-300 rounded-full text-sm"></span>
                <span className="px-4 py-1 bg-gray-100 rounded-full text-sm"></span> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src="https://via.placeholder.com/96"
                alt="year 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Year3</h2>
              <p className="text-gray-600 mb-4"></p>
              {/* <div className="flex gap-2">
                <span className="px-4 py-1 bg-gray-300 rounded-full text-sm"></span>
                <span className="px-4 py-1 bg-gray-100 rounded-full text-sm"></span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src="https://via.placeholder.com/96"
                alt="year 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Year4</h2>
              <p className="text-gray-600 mb-4"></p>
              {/* <div className="flex gap-2">
                <span className="px-4 py-1 bg-gray-300 rounded-full text-sm"></span>
                <span className="px-4 py-1 bg-gray-100 rounded-full text-sm"></span> */}
              {/* </div> */}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

