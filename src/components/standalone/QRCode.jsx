export default function QRCode({ showQR }){
  return (
    <div className={showQR ? `fixed bottom-48 lg:bottom-96 w-full flex justify-center z-20 transition-all ease-in-out` : `fixed -bottom-96 w-full flex justify-center z-20 transition-all ease-in-out`}>
      <img className="" src='https://qr-official.line.me/gs/M_923tlihp_GW.png' alt={'QR code to connet with SO on LINE'} />
    </div>
  )
}