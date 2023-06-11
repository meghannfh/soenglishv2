import { FiSend } from 'react-icons/fi'
import { useState, useCallback } from 'react';
import axios from 'axios';
const endpoint = 'https://getform.io/f/6f4e5e48-7cde-4442-aa3a-c391a91f4853'

const initialFormData = {
    fullName: "",
    email: "",
    concern: "",
    message: ""
};

export default function ContactForm(){
    console.log('#### Refreshing');

    const [formData, setFormData] = useState(initialFormData);

    const updateFormDataHandler = useCallback(
        (type) => (event) => {
            setFormData({...formData, [type]: event.target.value});
        },
        [formData]
    );

    const formHandler = useCallback(
        () => (event) => {
            event.preventDefault();
            console.log(formData);
        },
        [formData]
    );

    return (
        <div className="w-full">
            <form className="flex flex-row flex-wrap gap-4 contact-form" onSubmit={formHandler()}>
                <input
                    placeholder="名前"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={updateFormDataHandler("fullName")}>
                </input>
                <input 
                    type="hidden" 
                    name="_gotcha" 
                    style={{"display": "none !important"}}></input>
                <input
                    placeholder="メールアドレス"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={updateFormDataHandler("email")}>
                </input>
                <select 
                    name="concern"
                    value={formData.concern}
                    onChange={updateFormDataHandler("concern")}>
                        <option value="no-option">お問い合わせ内容:</option>
                        <option value="質問">質問</option>
                        <option value="有料カウンセリング申し込み">有料カウンセリング申し込み</option>
                        <option value="その他">その他</option>
                </select>
                <textarea 
                    placeholder="本文"
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={updateFormDataHandler("message")}>
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