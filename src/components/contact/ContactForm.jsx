import { FiSend } from 'react-icons/fi'

export default function ContactForm(){
    return (
        <div className="w-full">
            <form className="flex flex-row flex-wrap gap-4 contact-form" action="https://getform.io/f/6f4e5e48-7cde-4442-aa3a-c391a91f4853" method="POST">
                <input
                    placeholder="名前"
                    name="name"
                    type="text">
                </input>
                <input 
                    type="hidden" 
                    name="_gotcha" 
                    style={{"display": "none !important"}}></input>
                <input
                    placeholder="メールアドレス"
                    name="email"
                    type="email">
                </input>
                <select name="concern">
                    <option value="質問">質問</option>
                    <option value="有料カウンセリング">有料カウンセリング申し込み</option>
                    <option value="その他">その他</option>
                </select>
                <textarea 
                    placeholder="本文"
                    type="text"
                    name="message">

                </textarea>
                <button 
                    className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center gap-2 font-medium px-20 py-4 text-2xl icon-transition"
                    type="submit">
                    送る <span><FiSend hovercolor="white" /></span>
                </button>
            </form>
        </div>
    )
}