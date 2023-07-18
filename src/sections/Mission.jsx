import SectionTextbox from "../components/standalone/SectionTextbox"

export default function Mission(){

 const paragraphs = [
    {
      'subtitle': '',
      'sectionImg': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1689462168/talkinggraphic_cx1es8.webp',
      'text': [
        '<b>「明日がもっと、楽しみになる」</b>をSO ENGLISH!の新たなスローガンにしたのは2023年、SO ENGLISH!R(セーラームーンRからとっています)と題し、10年やってきた教室に革命(Revolution)が必要だと思ったからです。',
        '以前は、相手によって出す自分を変え、他人から好かれることに徹底していた私ですが、3度の留学を経て、Gayであることだけでなく、海外で同性結婚をして子供を育てたい夢があることや、絵や音楽やセーラームーンが大好きな自分を、誰に対しても出していこうと決めると、人生がより一層楽しく、生きやすくなりました。',
        '私は<b>「英語は世界へのチケット」</b>だとよく言っていますが、その切符が連れて行ってくれる「世界」は想像できないもので溢れています。そこではきっと、今まで見たことのない自分の意外な一面も見ることができます。揺るがない信念だと思っていたものが、いとも簡単に崩れることもあるかもしれません。起こる出来事が変われば人生が変わる。でも、そんな大それた理由でなくても、明日の自分の成長が楽しみになる、それだけで日々の彩度が少し上がると思うのです。',
        '英語を勉強する方は、みんな違う目的を持っています。その一人ひとりに、明日の楽しみを一つ増やすお手伝いができたらという思いで運営しています。'
      ]
    }
  ]

  return(
    <div className="w-full bg-white" id="section1">
      <div className="px-6 py-24 md:mx-40">
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-500">SO ENGLISH!のMissionは、英語学習を通して「明日がもっと、楽しみになる」こと</h2>
        {paragraphs ? paragraphs.map((paragraph, index) => (
          <SectionTextbox 
            key={index}
            subtitle={paragraph.subtitle}
            text={paragraph.text}
            sectionImg={paragraph.sectionImg && paragraph.sectionImg}
          />
        )) : 'nada'}
      </div>
    </div>
  )
}
