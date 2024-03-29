import Textbook from './Textbook';

export default function TextbooksCard({ textbooks, position, textbookSizes, leftArrowClicks, rightArrowClicks }){

  let newPosition = `${position}px`;
  return (
    <div className="grid justify-items-center w-fit">
      <div className='flex w-[200px] md:w-[500px] flex-row gap-3 overflow-hidden relative'>
        {textbooks.map((book, idx) => (
          <div className={`textbook-container absolute top-0 transition-all ease-in-out duration-300 ${
            idx === leftArrowClicks + 1 || idx === rightArrowClicks - 1
              ? 'md:text-lg'
              : `textbook-${textbookSizes[idx]}`
          }`} style={{"left": `${newPosition} `}} key={idx}>
            {book.url && <Textbook img={book.url} title={book.title} />}
          </div> 
        ))}
      </div>
    </div>
  )
}