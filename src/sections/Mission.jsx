import SectionTextbox from "../components/standalone/SectionTextbox"

export default function Mission(){

 const paragraphs = [
    {
      'subtitle': '',
      'sectionImg': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1689782080/Graphic1edit_v4c2r4.webp',
      'text': [
        '<b>「明日がもっと、楽しみになる」</b>をSO ENGLISH!の新たなスローガンにしたのは2023年、10年やってきた教室に革命(Revolution)が必要だと思ったからです。',
        '以前は、相手によって出す自分を変え、他人から嫌われないことに必死だった私ですが、3度の留学を経て、Gayであることだけでなく、海外で同性結婚をして子供を育てたい夢がある自分を、誰に対しても出していこうと決めると、人生がより一層楽しく、生きやすくなりました。',
        '私は<b>「英語は世界へのチケット」</b>だとよく言っていますが、その切符が連れて行ってくれる「世界」は想像できないもので溢れています。そこではきっと、今まで見たことのない自分の意外な一面も見ることができます。信じて疑わなかったことが、次の日には、全く違う見え方をするのです。起こる出来事が変われば人生が変わる。そんな未来に繋がる、「明日」の自分の成長が「楽しみになる」、それだけで日々の彩度が少し上がると思うのです。',
      ]
    }
  ]

  return(
    <div className="w-full bg-white" id="section1">
      <div className="px-6 sm:px-10 py-10 md:px-0 md:mx-20 lg:mx-40 xl:mx-60">
        <h2 className="text-purple-500">SO ENGLISH!のMissionは、英語学習を通して「明日がもっと、楽しみになる」こと</h2>
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
