export default function Textbook({ img, title }){
  return (
    <div className={`w-[100px] md:w-[200px] rounded-lg overflow-hidden hover:cursor-pointer`}>
      <img src={img} alt={title} />
    </div>
  )
}