import Textbook from './Textbook';

export default function TextbooksCard({ textbooks, grayscale }){

  return (
    <div className="grid justify-items-center w-fit">
      <div className='grid grid-cols-2 md:gap-6 lg:grid-cols-4 gap-3'>
        {textbooks.map((text, idx) => {
          return (
            <div className={`textbook-container ${grayscale[idx] ? 'grayscale' : ''}`} key={idx}>
              <Textbook img={text.url} id={idx} title={text.title} />
              <h3 className={`hidden absolute w-[250px] top-10 left-5 bg-white p-2 z-10`}>{text.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}