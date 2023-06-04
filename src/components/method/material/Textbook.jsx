export default function Textbook({ img, id, title }){
  function logId(){
    console.log(`Texbook id: ${id}`)
  }

  return (
    <div className="w-[150px] md:w-[200px] md:h-[280px] rounded-lg overflow-hidden hover:cursor-pointer" onMouseEnter={logId} id={id.toString()}>
      <img src={img} className="" alt={title} />
    </div>
  )
}