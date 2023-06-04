import ContactForm from './ContactForm';
import {HiOutlineMail} from 'react-icons/hi';

export default function Contact() {
  return (
    <div>
      <div className='px-6 py-10 md:px-24 w-full gap-2 bg-slate-300'>
        <div className="w-full">
          <h2 className="text-3xl md:text-3xl font-semibold text-slate-900">Let's have a chat</h2>
          <h3 className='pb-4'>Send me an email or fill out the form below.</h3>
          <h4 className='flex flex-row items-center gap-2 text-sm md:text-2xl pb-4 hover:cursor-pointer'><span className='text-lg md:text-3xl'><HiOutlineMail /></span> sosensei.soenglish@gmail.com</h4>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}