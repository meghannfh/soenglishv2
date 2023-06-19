import { FiSend } from 'react-icons/fi'

export default function ContactForm(){

  return (
    <div className="w-full">
      <form action="https://getform.io/f/6f4e5e48-7cde-4442-aa3a-c391a91f4853" method="POST" className="flex flex-row flex-wrap gap-4 contact-form">
        <input type="text" name="name" placeholder="名前" autoComplete="off"/>
        <input type="email" name="email" placeholder="メールアドレス" autoComplete="off" />
        <select name="concern">
          <option value="no-option">お問い合わせ内容:</option>
          <option value="質問">質問</option>
          <option value="有料カウンセリング申し込み">有料カウンセリング申し込み</option>
          <option value="その他">その他</option>
        </select>
        <input type="text" name="message" placeholder="本文" />
        <input type="hidden" name="_gotcha" style={{"display": "none !important"}} />
        <button 
          className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center gap-2 font-medium px-20 py-4 text-2xl icon-transition"
          type="submit">
          送る <span><FiSend hovercolor="white" /></span>
        </button>
      </form>
    </div>
  )
}