export default function SoPaintingsSection(){

  // const paintingImages = [
  //   'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688925009/24_gpt34g.webp'
  // ]

  const paragraphs = [
    '最後にあと少しだけ',
    '<b>「アートがあると人生がもっと豊かになる」</b>ということに気がついた32歳から、マーカーと水彩の絵を始めました。これもアメリカの高校で、とにかく自分を表現するという彼らのスタンスにカルチャーショックを受けたことも大きく影響を受けています。絵でも歌でも、上手い下手関係なく表現することに価値があり、効率性の真逆の位置にある芸術的な表現がある人生は豊かだと思うのです。昔から作詞作曲もします。これらは、誰の為でもなく自分の為です。絵や音楽以外にも観劇に映画、小説や詩やミュージカルも趣味です。アートで人生を共に豊かにする仲間を増やす、というのもSOの密かな目標だったりするのです。',
    'ただの一緒に旅行をするだけだった友人数名も、最近は一緒に絵を描いたり、短歌を作ったりして遊んでいます。ハードルのない、人生をちょっと豊にする為のアート活動、一緒に楽しみませんか？'
  ]

  return(
    <div className="w-full bg-white pb-10" id="section9">
      <div className="px-10 py-10 md:px-0 md:mx-20 lg:mx-40 xl:mx-60">
        <h2 className="text-2xl md:text-3xl font-semibold text-lime-500">SO's PAINTINGS<br/>アートでちょっと、人生が豊かになる</h2>
        {paragraphs.map((text, idx) => (
          <p className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900" key={idx} dangerouslySetInnerHTML={{__html: text}} />
        ))}

       <div className="mt-10">
       <div class="parent">
    <div class="div1"> </div>
<div class="div2"> </div>
<div class="div3"> </div>
<div class="div4"> </div>
<div class="div5"> </div>
<div class="div6"> </div>
<div class="div7"> </div>
<div class="div8"> </div>
<div class="div9"> </div>
<div class="div10"> </div>
<div class="div11"> </div>
<div class="div12"> </div>
<div class="div13"> </div>
<div class="div14"> </div>
<div class="div15"> </div>
<div class="div16"> </div>
<div class="div17"> </div>
<div class="div18"> </div>
<div class="div19"> </div>
<div class="div20"> </div>
<div class="div21"> </div>
<div class="div22"> </div>
<div class="div23"> </div>
  </div>
       </div>

      </div>
    </div>
  )
}