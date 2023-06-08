import Textbook from './Textbook';

export default function TextbooksCard({ textbooks }){

  return (
    <div className="grid justify-items-center w-fit">
      <div className='flex w-[500px] flex-row gap-3 overflow-hidden border-4 border-black relative'>
        {textbooks.map((book, idx) => {
          return (
            <div className='textbook-container absolute top-0 left-0' key={idx}>
              <Textbook img={book.url} title={book.title} />
              <h3 className={`hidden absolute w-[250px] top-10 left-5 bg-white p-2 z-10`}>{book.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}