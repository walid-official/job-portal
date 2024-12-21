const CategoryCard = ({ category }) => {
  const { imageUrl, categoryName, availableJobs } = category;
  return (
    <div className="relative group">
    <div className="card bg-base-100 py-10 text-[#090505] shadow-xl overflow-hidden duration-700">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <img src={imageUrl} alt="Category" className="max-w-full" />
        <p className="text-center font-bold text-xl py-4">{categoryName}</p>
        <p className="text-center text-lg">{availableJobs} jobs</p>
      </div>
  
      {/* Hover Background */}
      <div className="absolute top-full left-0 w-full h-full bg-transparent transition-all duration-1000 group-hover:top-0 group-hover:bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] z-0"></div>
    </div>
  </div>
  
  );
};

export default CategoryCard;
