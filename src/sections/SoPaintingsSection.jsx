export default function SoPaintingsSection(){

  const paragraphs = [
    '最後にあと少しだけ',
    '<b>「アートがあると人生がもっと豊かになる」</b>ということに気がついた32歳から、マーカーと水彩の絵を始めました。これもアメリカの高校で、とにかく自分を表現するという彼らのスタンスにカルチャーショックを受けたことも大きく影響を受けています。絵でも歌でも、上手い下手関係なく表現することに価値があり、効率性の真逆の位置にある芸術的な表現がある人生は豊かだと思うのです。昔から作詞作曲もします。これらは、誰の為でもなく自分の為です。絵や音楽以外にも観劇に映画、小説や詩やミュージカルも趣味です。アートで人生を共に豊かにする仲間を増やす、というのもSOの密かな目標だったりするのです。',
    'ただの一緒に旅行をするだけだった友人数名も、最近は一緒に絵を描いたり、短歌を作ったりして遊んでいます。ハードルのない、人生をちょっと豊にする為のアート活動、一緒に楽しみませんか？'
  ]

  return(
    <div className="w-full bg-white pb-10" id="section9">
      <div className="px-6 sm:px-10 py-10 md:px-0 md:mx-20 lg:mx-40 xl:mx-60">
        <h2 className="text-2xl md:text-3xl font-semibold text-lime-500">SO's PAINTINGS<br/>アートでちょっと、人生が豊かになる</h2>
        {paragraphs.map((text, idx) => (
          <p className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900" key={idx} dangerouslySetInnerHTML={{__html: text}} />
        ))}

      <div className="mt-10">
        <div className="parent">
          <div className="div1"> </div>
          <div className="div2"> </div>
          <div className="div3"> </div>
          <div className="div4"> </div>
          <div className="div5"> </div>
          <div className="div6"> </div>
          <div className="div7"> </div>
          <div className="div8"> </div>
          <div className="div9"> </div>
          <div className="div10"> </div>
          <div className="div11"> </div>
          <div className="div12"> </div>
          <div className="div13"> </div>
          <div className="div14"> </div>
          <div className="div15"> </div>
          <div className="div16"> </div>
          <div className="div17"> </div>
          <div className="div18"> </div>
          <div className="div19"> </div>
          <div className="div20"> </div>
          <div className="div21"> </div>
          <div className="div22"> </div>
          <div className="div23"> </div>
          <div className="div24"> </div>
        </div>
      </div>

      </div>
    </div>
  )
}