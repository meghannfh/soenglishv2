export default function MediaCard({ icon, explanation, type }){
  return (
    <div className='relative h-full'>
      	<div className="bg-white h-full w-full rounded-lg absolute z-10 transition-transform ease-in-out hover:cursor-pointer hover:-translate-y-3 hover:-translate-x-3">
      		<div className="flex flex-row items-center gap-4 lg:gap-2 mb-6 w-full h-full justify-center lg:px-2">
      	 {icon.length > 0 ? icon.map((icon, idx) => (
      	   <span className="text-4xl" key={idx}>{icon}</span>
      	 )) : 'nada'}
      		<p className="text-md">{explanation}</p>
      		</div>
    	</div>
		<div className='bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 h-full w-full rounded-lg absolute top-0' />
    </div>
      
  )
}