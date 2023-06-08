import { FiSend } from 'react-icons/fi'

export default function ContactForm(){
    return (
        <div className="w-full">
            <form className="flex flex-row flex-wrap gap-4 contact-form" action="https://getform.io/f/6f4e5e48-7cde-4442-aa3a-c391a91f4853" method="POST">
                <input
                    className="w-full"
                    placeholder="名前"
                    name="name"
                    type="text">
                </input>
                <input 
                    type="hidden" 
                    name="_gotcha" 
                    style={{"display": "none !important"}}></input>
                <input
                    className="w-full"
                    placeholder="メールアドレス"
                    name="email"
                    type="email">
                </input>
                <select name="work-experience">
                    <option value="質問">質問</option>
                    <option value="有料カウンセリング">有料カウンセリング申し込み</option>
                    <option value="その他">その他</option>
                </select>
                <textarea 
                    className="w-full"
                    placeholder="本文"
                    type="text"
                    name="message">

                </textarea>
                <button 
                    className="bg-white hover-bg flex flex-row items-center gap-2 font-bold px-20 py-4 text-xl icon-transition"
                    type="submit">
                    send <span><FiSend hovercolor="white" /></span>
                </button>
            </form>
        </div>
    )
}