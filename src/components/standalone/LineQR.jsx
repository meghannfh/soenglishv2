export default function LineQR({ showQR }){
    return (
        <div className={showQR ? `w-full fixed flex bottom-60 justify-center z-40 transition-all ease-in-out` : `fixed bottom-[-40rem] flex justify-center z-40 transition-all ease-in-out w-full`}>
            <div className="relative flex flex-col gap-2 bg-white p-2 border-4 w-1/3 lg:w-1/4">
                <img className="" src='https://qr-official.line.me/gs/M_923tlihp_GW.png' alt={'QR code to connet with SO on LINE'} />
            </div>
        </div>
    )
}