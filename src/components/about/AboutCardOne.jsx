import photoOne from '../../media/images/babysonsis.png';

export default function AboutCardOne(){
  return(
    <div className="flex flex-col about">
      <div>
        <h3 className="mt-6 font-semibold leading-relaxed md:leading-loose text-2xl md:text-2xl text-[#282828]">私は、友達や生徒や他の英語の先生方から「ペラペラだね」と言っていただくことはたまにありますが、自分自身をそのように思ったことは一度もありません。
        </h3>
      </div>
      <div>
        <p className="mt-6 text-2xl md:text-lg font-medium text-slate-900">それでも、どのようにして私が今のように英語を話せるようになり、海外に住み友達を作り、夜な夜なお酒を飲みながら政治の話や恋の話をし、ホテルや空港や市役所でトラブルがあっても話し合って解決をできるようになったかを少しお話したいと思います。英語と直接は関係のないことでも、英語学習のヒントになることがあるかもしれませんので、よければ読んでみてくださいね。</p>
      </div>
      <div className="w-full flex flex-col mb-10 md:flex-row lg:flex-row gap-12 items-center justify-center mt-6">
        <img src={photoOne} className="-rotate-[5deg] w-[50%] md:w-[40%] lg:w-[250px]" alt={'young soichi standing next to his sister on elementery entrance ceremony'}/>
        <p className="lg:w-full text-2xl md:text-lg text-[#282828]">
        私が小さい頃、母は本業のイラストレーターの傍ら、自宅でこども英語教室を始めました。洋楽好きの影響で発音が得意な母の英語が、私が最初に耳にした英語でした。放任主義で育てられた私は、妹と違ってどんな習い事にも興味を示さず、ゲームばかりしていましたが、小学６年生の時に我が家に飛び込みで来た爽やか営業マンの話を聞いて、初めて自分から「やりたい」と言ったのが子供英会話教室でした。そこで初めてフォニックスという英語の音と文字を繋げる学習に触れました。今では英語学習界隈では知らない人の方が少ないフォニックスは、その時はまだ誰も知らない画期的なものだったと思います。今私が多くの方に発音を褒めていただくようになったのは間違いなくフォニックス学習があったからです。
        </p>
      </div>
    </div>
  )
}