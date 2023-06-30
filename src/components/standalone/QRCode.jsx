import { FaWindowClose } from 'react-icons/fa';

export default function QRCode({ showQR, handleCloseQRClick }){
  return (
    <div className={showQR ? `fixed bottom-48 lg:bottom-96 w-full flex justify-center z-20 transition-all ease-in-out` : `fixed -bottom-96 w-full flex justify-center z-20 transition-all ease-in-out`}>
      <div className='relative'>
      <i onClick={handleCloseQRClick} className='text-2xl hover:cursor-pointer absolute -top-2 -right-2'><FaWindowClose/></i>
      <img className="shadow-md shadow-slate-800" src='https://qr-official.line.me/gs/M_923tlihp_GW.png' alt={'QR code to connet with SO on LINE'} />
      </div>
    </div>
  )
}