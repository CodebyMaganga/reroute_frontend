
const Card = ({index, icon, title, description, opacity}) => {
  return (
    <div className='flex flex-col w-1/4  justify-center items-center '>
    <div
    style={{ backgroundColor: `rgba(17, 24, 42, ${opacity / 100})` }}
    className={` h-[300px] rounded-2xl p-4 flex flex-col`}>
        <div className='flex flex-row justify-around items-center'>
        <div>
        <p className="text-neutral-400">{index}</p>
        </div>
        <div className="bg-gray-800 p-2 rounded-lg">
        <p className="">{icon}</p>
        </div>
        </div>
        <div className="my-4">
            <p className='text-center'>{title}</p>
            <p className="text-neutral-400 text-center">{description}</p>
        </div>
        
    </div>
    </div>
  )
}

export default Card;