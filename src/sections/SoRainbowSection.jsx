import { Fragment } from 'react';
export default function SoRainbowSection(){

  const soRainbowText = [
    '2013~19年「結婚式から同性婚実現を!」のスローガンのもと、合同会社Juerias LGBT Weddingを立ち上げ、代表および共同代表を務めました。私がベルギー留学の為に去った後も、当社は現在も多くの方に居場所と素敵な思い出づくりのきっかけを提供しています。',
    '毎月の出会いパーティー・勉強会やセミナーを主催、結婚式のプランニング、司会、プロデュース、パートナーシップ公正証書の発行、東京レインボープライドへフロート出展などし、各種全国紙・雑誌の取材を受けていました。',
    '中でも毎月のパーティーは、とても大切にしていました。「初めて他のLGBTQ+の人と会う」という方もたくさんいました。一歩踏み出したくて、勇気を出して参加してくれました。「参加して人生が変わった」と多くの方から言ってもらえるイベントでした。',
    '「英語を教える事」と「LGBTQ+の居場所を作る事」は、一見全然違うものの様ですが、両方の「現在の自分を受け入れ、前に進むきっかけになる」という点が私の共通の情熱でした。今後も「英語の先生」という枠にとらわれず、使命感を信じて行動を選択していきたいです。',
    '「日本だから結婚できない」と思われている方、英語が、もしからしたら明日への切符かもしれません。'
  ]

  const soRainbowImg = [
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_332/v1687408308/DSC_1980_auej2p.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_332/v1687408308/DSC_2076_guhj1k.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_332/v1687878823/0094_xlarge_pcxzrt.jpg',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_332/v1687878823/0076_xlarge_ovvmbc.jpg',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_332/v1687878823/DSC_1502_mccjph.jpg',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/c_thumb,w_332/v1687878823/DSC_0810_ssxsla.jpg'
  ]

    return(
        <div className="w-full bg-sorainbow-image bg-cover" id="section6">
        <div className="px-6 sm:px-10 py-10 md:px-0 md:mx-20 lg:mx-40 xl:mx-60">
          <h2 className="text-white">SO RAINBOW!<br/> 私が使命感を持って取り組んだもう一つの仕事～「日本だから結婚できない」と思われている方へ～</h2>
          {soRainbowText.map((text, idx) => (
            <Fragment key={idx}>
              <p className="text-white" key={idx}>{text}</p>
            {idx === 1 && (
              <div className="mt-10 w-full flex flex-col gap-6 md:flex-row justify-center md:gap-10">
                <div className='md:h-[221px] md:w-[322px]'>
                  <img src={soRainbowImg[0]} alt={''} className='w-full h-full object-cover'/>
                </div>
                <div className='md:h-[221px] w-auto md:w-[322px]'>
                  <img src={soRainbowImg[1]} alt={''} className='w-full h-full'/>
                </div>
              </div>
            )}
            {idx === 2 && (
              <div className="mt-10 w-full flex flex-col gap-6 md:flex-row justify-center md:gap-10">
                <div className='md:h-[221px] md:w-[322px]'>
                  <img src={soRainbowImg[2]} alt={''} className='w-full h-full' />
                </div>
                <div className='md:h-[221px] md:w-[322px]'>
                  <img src={soRainbowImg[3]} alt={''} className='w-full h-full' />
                </div>                
              </div>
            )}
            {idx === 3 && (
              <div className="mt-10 w-full flex flex-col gap-6 md:flex-row justify-center md:gap-10">
                <div className='md:h-[221px] md:w-[322px]'>
                  <img src={soRainbowImg[4]} alt={''} className='w-full h-full' />
                </div>
                <div className='md:h-[221px] md:w-[322px]'>
                  <img src={soRainbowImg[5]} alt={''} className='w-full h-full' />
                </div>
              </div>
            )}
            </Fragment>
          ))}
          <div>
            <img src='' alt=''/>
          </div>
        </div>
      </div>
    )
}