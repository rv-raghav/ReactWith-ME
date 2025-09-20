const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="w-48 h-48 m-4 p-4 border border-gray-200 rounded-lg shadow bg-gray-200 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
