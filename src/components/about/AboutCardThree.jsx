
import photoFour from '../../media/images/soenglishpic4.png'
import photoFive from '../../media/images/soenglishpic5.png'

export default function AboutCardThree(){
  return(
    <div className="flex flex-col about">
      <div className="mt-6 gap-12 items-center justify-center">
      	<p className="text-2xl leading-relaxed md:leading-loose md:text-lg mb-10">
      	そこから意を決し、家で何度も友達との会話をイメトレし、質問されたら答えるだけの受け身にならないよう自分から話題を作る練習をし、授業中やランチタイムやスクールバスで話しかけては失敗し、たまに成功し、喜び、落ち込む、というのを毎日繰り返していました。気がついたら、ホストマザーの送り迎えを断って友達の車で登校したり、友達とバンドを組んでライブをしたり、仲の良い友達を誘ってタキシードを着てプロムに行けるようになっていて、そんな自分を第三者の視点から見て、感慨深い思いになりました。英語で友達と腹を抱えて笑って、お別れの時には泣きながらハグをする関係を作ることができた自分の英語力の伸びと、それ以上に人間の持つ可能性を実感したのを覚えています。
      	</p>
      	<div className="flex justify-center mb-10">
      	    <img src={photoFour} className="-rotate-[5deg] lg:w-[25%] w-1/3" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
      	    <img src={photoFive} className="-rotate-[-5deg] lg:w-[50%] w-1/2" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
      	</div>
      	<p className="text-2xl leading-relaxed md:leading-loose md:text-lg mb-10">
      	アメリカの高校で、前のめりに授業を受けている現地の学生たちに影響を受けて、帰国後は人が変わったように勉強が好きになり、どの教科においても優等生になりました。留学前は考えていなかった大学進学を決め、大学在学中に二度目の留学をし、帰国後卒業し、英会話教室の講師勤務を経て、独立後、専門学校や企業とプライベートレッスンで、英会話、TOEIC、発音を教える傍ら、翻訳の仕事、LGBTカップルのウエディング事業の立ち上げなどをしてきました。2021年より外国語習得論についての知見を深める為(といいつつ婚活がメインの目的で笑)、ベルギーに渡り大学院（言語学修士）に進学しました。
      	</p>
      </div>
    </div>
  )
}