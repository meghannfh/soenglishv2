import ContactForm from "../components/contact/ContactForm"

export default function ContactSection({ handleContactClick }){
    return(
      <div id="section7">
        <div className='w-full px-6 py-10 md:px-24 gap-2 bg-slate-300 flex flex-col lg:flex-row items-center justify-between'>
          <div className='lg:w-1/3'>
            <h2 className="text-3xl md:text-3xl font-semibold text-slate-900">Let's have a chat</h2>
            <p className='mt-6 font-medium text-slate-900 text-2xl leading-relaxed md:leading-loose md:text-lg'>有料カウンセリングの申し込みを含むお問い合わせは、LINEをお持ちの方なら、より早く返信が可能ですので、
            <span className="font-semibold hover:cursor-pointer" onClick={handleContactClick}>QRコードより公式LINEに友達追加</span>
            の上、ご連絡を頂けると幸いです。</p>
            <p className='mt-6 font-medium text-slate-900 text-2xl leading-relaxed md:leading-loose md:text-lg'>以下、メールでやり取りを希望される方は、フォームにご記入をお願いいたします。</p>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-2/3 lg:py-6 lg:px-10">
            <ContactForm />
          </div>
        </div>
      </div>
    )
  }