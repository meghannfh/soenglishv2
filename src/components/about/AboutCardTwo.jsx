import photoTwo from '../../media/images/soenglishpic2.png'
import photoThree from '../../media/images/soenglishpic3.png'

export default function AboutCardTwo(){
  return(
    <div className="flex flex-col about">
      <div className="mt-6 gap-12 items-center justify-center">
        <p className="text-2xl leading-relaxed md:leading-loose md:text-lg mb-10">
        中学では、英語はできるが暗記教科には興味がない平均的な生徒でした。東京の田舎に住んでいて、少し目立ったことをすれば、次の日には周りのお母さんたちが噂話をする、そんな小さくて閉鎖的な空間に嫌気がさしていて、早くもっと大きなところに行きたいと思っていました。それが理由で、高校は地元から離れたところに通い、都心でばかり遊んでいましたが、確かに人生は好転した気がしました。そのうち、更に大きなところへ行けば、人生が大きく変わるかもしれないと思い、アメリカ留学を決意しました。ちなみに、高校は外国語コースに入ったため、中学でちょっと英語が得意だった私は完全に英語落ちこぼれになり、勉強ができないひょうきんキャラを通していた為、担任に留学を相談した時は「甘くないよ」と猛反対されました。笑
        </p>
        <div className="flex justify-center mb-10">
          <img src={photoTwo} className="-rotate-[5deg] lg:w-[35%] md:w-[40%] w-1/2" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
          <img src={photoThree} className="-rotate-[-5deg] lg:w-[35%] md:w-[40%] w-1/2" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
        </div>
        <p className="text-2xl leading-relaxed md:leading-loose md:text-lg mb-10">
        それでも周囲の反対を押し切って留学しましたが、実は最初、そんなに苦労しなかったのです。英語はHello, my name is Soichi. Please call me So.ぐらいしか話せませんでしたが、ラッキーなことに配属先がミネソタ州という辺鄙な場所で、留学生が珍しかったことと、高校生だったので、周りが興味を持ってたくさん話しかけてくれたのです。英語は話せませんでしたが、小さい頃から知らない人と話す機会が多くあり、ノリだけでなんとなく留学生活をうまくやっている気になっていました。が、それが大きな落とし穴でした。3ヶ月も経つ頃には、話しかけても話を広げられない私のことには誰も興味がなくなっていました。学校の授業は現地の学生たちと一緒に受けていたので、Shake SpearやCivil Warなどの難しい内容に、まったくついていくことが出来ず、完全に孤立していました。唯一楽しかったのはChoirという合唱の授業で、そこだけが学校で居場所を感じられる場所でした。どんなに悩んでもインターネットもろくに使えない時代だったので、日本の家族と話す機会は、3ヶ月に一度ほど、高い通話料を払ってする国際電話だけでした。
        </p>
      </div>
    </div>
  )
}