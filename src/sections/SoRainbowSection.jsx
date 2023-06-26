export default function SoRainbowSection(){

  const soRainbowText = [
    '2013~19年「結婚式から同性婚実現を!」のスローガンのもと、合同会社Juerias LGBT Weddingを立ち上げ、代表および共同代表を務めました。私がベルギー留学の為に去った後も、当社は現在も多くの方に居場所と素敵な思い出づくりのきっかけを提供しています。',
    '毎月の出会いパーティー・勉強会やセミナーを主催、結婚式のプランニング、司会、プロデュース、パートナーシップ公正証書の発行、東京レインボープライドへフロート出展などし、各種全国紙・雑誌の取材を受けていました。',
    '中でも毎月のパーティーは、とても大切にしていました。「初めて他のLGBTQ+の人と会う」という方もたくさんいました。一歩踏み出したくて、勇気を出して参加してくれました。「参加して人生が変わった」と多くの方から言ってもらえるイベントでした。',
    '「英語を教える事」と「LGBTQ+の居場所を作る事」は、一見全然違うものの様ですが、両方の「現在の自分を受け入れ、前に進むきっかけになる」という点が私の共通の情熱でした。今後も「英語の先生」という枠にとらわれず、使命感を信じて行動を選択していきたいです。',
    '「日本だから結婚できない」と思われている方、英語が、もしからしたら明日への切符かもしれません。'
  ]

  // const soRainbowImg = [
  //   'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687408308/DSC_1980_auej2p.webp',
  //   'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687408308/DSC_2076_guhj1k.webp',
  //   '',
  //   '',
  //   '',
  //   ''
  // ]

    return(
        <div className="w-full" id="section7">
        <div className="flex flex-col px-6 py-24 md:px-24">
          <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">SO RAINBOW!<br/> 私が使命感を持って取り組んだもう一つの仕事～「日本だから結婚できない」と思われている方へ～</h2>
          {/*start paragraphs */}
          {/*Paragraph 1*/}
          {soRainbowText.map((text, idx) => (
            <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900" key={idx}>{text}</p>
          ))}
          <div>
            <img src='' alt=''/>
          </div>
        </div>
      </div>
    )
}