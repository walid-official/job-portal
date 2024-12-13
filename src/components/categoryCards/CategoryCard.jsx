const CategoryCard = ({ category }) => {
  const { imageUrl, categoryName, availableJobs } = category;
  return (
    <div className="group">
      <div className="card bg-base-100 text-[#090505] duration-700 relative shadow-xl overflow-hidden">
        {/* Hover overlay */}
        <div className="absolute top-0 left-0 inset-0 bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-xl"></div>
        {/* Card content */}
        <div className="card-body relative z-10">
          <div className="card-actions justify-center">
            <img src={imageUrl} alt="" />
          </div>
          <p className="text-center font-bold text-xl py-4">{categoryName}</p>
          <p className="text-center text-[18px]">{availableJobs} jobs</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
