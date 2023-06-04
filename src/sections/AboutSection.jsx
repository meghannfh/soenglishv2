import AboutHero from "../components/about/AboutHero";
import SectionTextbox from "../components/standalone/SectionTextbox";

export default function AboutSection() {

  return(
    <div id="section2">
      <AboutHero />
      <SectionTextbox 
        title='SOの生い立ちと3度の留学経験'
        p1='SO ENGLISH!のウェブサイトにお越しいただきありがとうございます。私は、2021年にベルギーに留学するまで、3校の専門学校勤務とSO ENGLISH!の授業を掛け持ちしていましたが、渡航をきっかけに完全ノマドになり、2023年現在は場所を選ばず、日本と海外を行き来しながらフリーランスの講師業をしています。行った国は20を超えます。国の様子はインスタグラムにまとめてあるので良かったら見てみてくださいね。趣味は国内外問わず美術館を周ることで、旅先で街や自然の風景の絵を描くことです。そして旅行先での一期一会の交流が何より好きです。昔からこのような生き方をしようと思っていたわけではありませんが、日々の経験と共に変わっていく自分自身の感覚を大切にしながら生きていたら、気が付いたらこのような場所にいたというわけです。'/>
    </div>
  )
}