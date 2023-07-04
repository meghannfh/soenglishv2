import ContactForm from "../components/contact/ContactForm"

export default function ContactSection(){
  return(
    <div id="section8" className='w-full px-6 py-10 md:px-24 gap-2 bg-blue-100 flex flex-row border-4 border-red-500'>
      <div className='border-4 border-fuchsia-500 w-1/2'>
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600">Contact</h2>
        <p className='mt-6 font-medium text-slate-900 text-2xl leading-relaxed md:leading-loose md:text-lg'>有料カウンセリングの申し込みを含むお問い合わせは、LINEをお持ちの方なら、より早く返信が可能ですので、QRコードより公式LINEに友達追加の上、ご連絡を頂けると幸いです。以下、メールでやり取りを希望される方は、フォームにご記入をお願いいたします。</p>
        {/* <p className='mt-6 font-medium text-slate-900 text-2xl leading-relaxed md:leading-loose md:text-lg'>以下、メールでやり取りを希望される方は、フォームにご記入をお願いいたします。</p> */}
        <img className="" src='https://qr-official.line.me/gs/M_923tlihp_GW.png' alt={'QR code to connet with SO on LINE'} />
      </div>
      <div className="w-1/2">
        <ContactForm />
      </div>
    </div>
  )
}