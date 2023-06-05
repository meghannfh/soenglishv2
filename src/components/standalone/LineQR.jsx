// import { GrClose } from 'react-icons/gr';

export default function LineQR({ showQR }){
    return (
        <div className={showQR ? `w-full fixed flex bottom-60 justify-center z-40 transition-all ease-in-out` : `w-full fixed -bottom-96 flex justify-center z-40 transition-all ease-in-out` }>
            <div className="relative border shadow-md shadow-slate-800">
               {/* <span className="absolute left-2 -top-10 p-2 text-2xl flex flex-row items-center bg-white rounded-md drop-shadow-md hover:cursor-pointer">
                <GrClose /> close
               </span> */}
                <img className="" src='https://qr-official.line.me/gs/M_923tlihp_GW.png' alt={'QR code to connet with SO on LINE'} />
            </div>
        </div>
    )
}