import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';

export default function AboutNextBtn({ text, handleClick }){

  return(
    <div className='w-fit px-3 py-2' onClick={handleClick}>
      <button className="hover-underline-animation flex flex-row items-center gap-1 text-3xl">
        {text === "前へ" ? <><GrLinkPrevious /> {text}</> : <>{text} <GrLinkNext /></>}
      </button>
    </div>
  )
}