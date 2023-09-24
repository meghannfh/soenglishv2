import ContactForm from "../components/contact/ContactForm"

export default function ContactSection(){
  return(
    <div id="section8" className='w-full px-6 py-10 md:px-20 bg-blue-100'>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">Contact</h2>
      <div className="mt-6 w-full flex flex-col md:flex-row gap-10">
        <div className='md:w-1/2 flex flex-col justify-start items-center'>
          <p className='indent-5 font-medium text-slate-900 leading-relaxed md:leading-loose text-lg'>有料カウンセリングの申し込みを含むお問い合わせは、LINEをお持ちの方なら、より早く返信が可能ですので、<a href="https://lin.ee/4NUjdB9" className="underline text-blue-500">こちら</a>をクリックするか、QRコードより公式LINEに友達追加の上、ご連絡を頂けると幸いです。以下、メールでやり取りを希望される方は、フォームにご記入をお願いいたします。</p>
          <img className="w-2/3 mt-4" src='https://qr-official.line.me/gs/M_923tlihp_GW.png' alt={'QR code to connet with SO on LINE'} />
        </div>
        <div className="md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}