import ReviewCard from "./ReviewCard";

export default function Reviews(){

  const reviews = [
    {
      "review": "English abilityがbeginnerのため、毎回のレッスンは取り繕うことができず、それゆえ素の自分でいるしかなく、だからこそ見えてくる自分の本質に、時に照れたり落ち込んだり、気づかされて驚いたり等、英語学習を通じて自分を知り、自分磨きができた一年だと感じています。生涯続けていきたいものに出逢えたことは感謝だし、So先生が外国にいてもレッスンを続けてくださることも感謝だし、英語があると狭くて小さな自分が広く大きくなるような気分で、とてもhappyです。長く続けるためには好奇心を持って自ら積極的に関わる必要があるし(ツライことは続かない)、そのためには何より心の躍動感が大切だと再認識しました。学生時代に出来なかった楽しみながら英語に触れるチャンスが今、手に入れっていることに感謝です。今後とも引き続きよろしくお願いします。"
    },
    {
      "review": "great teacher soichi!! 先生のレッスン、大好きです！来年もよろしくお願いします。：）"
    },
		{
      "review": "そう先生は、授業をしているという硬い感じでなく、そう先生が外人にしか見えない位の雰囲気と発音の良さで心が上がります。その中でアドバイスと分かりやすい具体的な勉強方法を教えて頂きありがとうございます。今年もありがとうございました。来年もよろしくお願いします。"
    },
    {
      "review": "笑顔・明るさ・元気・楽しさ。4つ全てを兼ね備えたパワフル先生!!! Good smile teacher :)"
    },
  ]

  return(
    <div className="px-6 py-24 md:px-24 md:grid md:place-content-center">
      <div>
        <h2 className="text-5xl md:text-3xl font-semibold text-slate-900" id="about-top">Student Feedback</h2>
      </div>
      <div className="mt-10 border-2 border-slate-800 h-96 overflow-y-auto">
        <div className="w-full flex flex-col justify-center px-6">
          {reviews.map((text, idx) => {
            return (
              <ReviewCard text={text.review} key={idx}/>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}