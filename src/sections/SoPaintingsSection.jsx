export default function SoPaintingsSection(){

  const paintings = [
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908443/1_qk2qnz.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908444/2_v5nbew.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908443/3_y8bnmw.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908443/4_xnnflf.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908444/5_k7vdgg.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908444/6_g3g1e9.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908444/7_z99rdk.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908445/8_ni92bm.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908445/9_jmtyag.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908445/10_zs7n91.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908445/11_shrqpv.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908445/12_b8x9ot.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908446/13_pamdkp.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908446/14_znfpjg.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908446/15_s5bei2.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908443/16_aww0ut.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908443/17_tjxmu1.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908443/18_eipvk4.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908444/19_wogodl.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908444/20_sdtmfq.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908445/21_pkssgr.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908447/22_uxl5ja.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688908447/23_xhrzf8.webp',
    'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688925009/24_gpt34g.webp'
  ]

  const paragraphs = [
    '最後にあと少しだけ',
    '「アートがあると人生がもっと豊かになる」ということに気がついた32歳から、マーカーと水彩の絵を始めました。これもアメリカの高校で、とにかく自分を表現するという彼らのスタンスにカルチャーショックを受けたことも大きく影響を受けています。絵でも歌でも、上手い下手関係なく表現することに価値があり、効率性の真逆の位置にある芸術的な表現がある人生は豊かだと思うのです。昔から作詞作曲もします。これらは、誰の為でもなく自分の為です。絵や音楽以外にも観劇に映画、小説や詩やミュージカルも趣味です。アートで人生を共に豊かにする仲間を増やす、というのもSOの密かな目標だったりするのです。',
    'ただの一緒に旅行をするだけだった友人数名も、最近は一緒に絵を描いたり、短歌を作ったりして遊んでいます。ハードルのない、人生をちょっと豊にする為のアート活動、一緒に楽しみませんか？'
  ]

  return(
    <div className="w-full bg-white pb-10" id="section9">
      <div className="flex flex-col px-6 py-24 md:px-24">
      <h2 className="text-5xl md:text-4xl font-semibold text-lime-500">SO's PAINTINGS<br/>アートでちょっと、人生が豊かになる</h2>
        {paragraphs.map((text, idx) => (
          <p className="mt-3 indent-5 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900" key={idx} dangerouslySetInnerHTML={{__html: text}} />
        ))}
       <div className="mt-10">
        <div className="parent1">
          <div className="uno">
            <img src={paintings[0]} alt='painting' className="h-full"/>
          </div>
          <div className="dos">
            <img src={paintings[1]} alt='painting' className="h-full"/>
          </div>
          <div className="tres">
            <img src={paintings[2]} alt='painting' className="h-full"/>
          </div>
        </div>

        <div className="parent2 mt-6">
          <div className="quatro">
            <img src={paintings[3]} alt='painting' className="h-full"/>
          </div>
          <div className="cinco">
            <img src={paintings[4]} alt='painting' className="h-full"/>
          </div>
        </div>

        <div className="parent3 mt-6">
          <div className="seis">
            <img src={paintings[5]} alt='painting' className="h-full"/>
          </div>
          <div className="siete">
            <img src={paintings[6]} alt='painting' className="h-full"/>
          </div>
          <div className="ocho">
            <img src={paintings[7]} alt='painting' className="h-full"/>
          </div>
          <div className="nueve">
            <img src={paintings[8]} alt='painting' className="h-full"/>
          </div>
        </div>

        <div className="parent2 mt-6">
          <div className="quatro">
            <img src={paintings[9]} alt='painting' className="h-full"/>
          </div>
          <div className="cinco">
            <img src={paintings[10]} alt='painting' className="h-full"/>
          </div>
        </div>

        <div className="parent4 mt-6">
          <div className="diez">
            <img src={paintings[11]} alt='painting' className="h-full"/>
          </div>
          <div className="once">
            <img src={paintings[12]} alt='painting' className="h-full"/>
          </div>
          <div className="doce">
            <img src={paintings[13]} alt='painting' className="h-full"/>
          </div>
        </div>

        <div className="parent5 mt-6">
          <div className="trece">
            <img src={paintings[14]} alt='painting' className="h-full"/>
          </div>
          <div className="quatorce">
            <img src={paintings[18]} alt='painting' className="h-full"/>
          </div>
          <div className="quince">
            <img src={paintings[15]} alt='painting' className="h-full"/>
          </div>
          <div className="dieziseis">
            <img src={paintings[20]} alt='painting' className="h-full"/>
          </div>
        </div>

        <div className="parent5 mt-6">
          <div className="trece">
            <img src={paintings[14]} alt='painting' className="h-full"/>
          </div>
          <div className="quatorce">
            <img src={paintings[18]} alt='painting' className="h-full"/>
          </div>
          <div className="quince">
            <img src={paintings[15]} alt='painting' className="h-full"/>
          </div>
          <div className="dieziseis">
            <img src={paintings[20]} alt='painting' className="h-full"/>
          </div>
        </div>

        <div className="parent6 mt-6">
          <div className="diezisiete">
            <img src={paintings[17]} alt='painting' className="h-full"/>
          </div>
          <div className="dieziocho">
            <img src={paintings[16]} alt='painting' className="h-full"/>
          </div>
          <div className="diezinueve">
            <img src={paintings[20]} alt='painting' className="h-full"/>
          </div>
          <div className="vente">
            <img src={paintings[21]} alt='painting' className="h-full"/>
          </div>
          <div className="ventiuno">
            <img src={paintings[22]} alt='painting' className="h-full"/>
          </div>
          <div className="ventidos">
            <img src={paintings[23]} alt='painting' className="h-full"/>
          </div>
        </div>


       </div>
      </div>
    </div>
  )
}