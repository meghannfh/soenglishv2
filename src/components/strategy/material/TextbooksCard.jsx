import Textbook from './Textbook';

export default function TextbooksCard({ textbooks, position = 280 }){

  let newPosition = `${position}px`;
  console.log(newPosition)
  return (
    <div className="grid justify-items-center w-fit">
      <div className='flex w-[500px] flex-row gap-3 overflow-hidden relative p-2'>
        {textbooks.map((book, idx) => {
          return (
            <div className={`textbook-container absolute top-0 transition-all ease-in-out duration-300 -left-[${newPosition}]`} key={idx}>
              <Textbook img={book.url} title={book.title} />
            </div> 
          )
        })}
      </div>
    </div>
  )
}