import { FiSend } from 'react-icons/fi'

export default function ContactForm(){
    return (
        <div className="w-full">
            <form className="flex flex-row flex-wrap gap-4 contact-form">
                <input
                className="w-full"
                placeholder="first name">
                </input>
                <input
                className="w-full"
                placeholder="last name">
                </input>
                <input
                className="w-full"
                placeholder="email">
                </input>
                <textarea 
                className="w-full"
                placeholder="message">

                </textarea>
                <button className="bg-white hover-bg flex flex-row items-center gap-2 font-bold px-20 py-4 text-xl icon-transition">send 
                <span><FiSend hoverColor="white" /></span></button>
            </form>
        </div>
    )
}