import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div>
      <div className='w-full px-6 py-10 md:px-24 gap-2 bg-slate-300 flex flex-row items-center justify-between'>
        <div className='w-1/3'>
          <h2 className="text-3xl md:text-3xl font-semibold text-slate-900">Let's have a chat</h2>
          <p className='mt-6 font-medium text-slate-900 text-2xl leading-relaxed md:leading-loose md:text-lg'>有料カウンセリングの申し込みを含むお問い合わせは、LINEをお持ちの方なら、より早く返信が可能ですので、QRコードより公式LINEに友達追加の上、ご連絡を頂けると幸いです。</p>
          <p className='mt-6 font-medium text-slate-900 text-2xl leading-relaxed md:leading-loose md:text-lg'>以下、メールでやり取りを希望される方は、フォームにご記入をお願いいたします。</p>
        </div>
        <div className="w-1/3">
          <ContactForm />
        </div>
        <div className='flex justify-center'>
          <img className="w-[300px]" src='https://qr-official.line.me/gs/M_923tlihp_GW.png' alt={'QR code to connet with SO on LINE'} />
        </div>
      </div>
    </div>
  )
}