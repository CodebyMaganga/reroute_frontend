
const Card = ({ index, icon, title, description, opacity }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 lg:w-1/4 justify-center items-center p-2">
      <div
        style={{ backgroundColor: `rgba(17, 24, 42, ${opacity / 100})` }}
        className="h-[300px] rounded-2xl p-4 flex flex-col w-full"
      >
        {/* Top Section */}
        <div className="flex flex-row justify-between items-center">
          <p className="text-neutral-400">{index}</p>
          <div className="bg-gray-800 p-2 rounded-lg">{icon}</div>
        </div>

        {/* Content Section */}
        <div className="my-4 flex flex-col items-center text-center">
          <p className="font-semibold">{title}</p>
          <p className="text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
};


export default Card;