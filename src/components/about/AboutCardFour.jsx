export default function AboutCardFour(){
  return(
    <div className="flex flex-col about">
      <div className="mt-6 gap-12 items-center justify-center">
      	<p className="text-2xl leading-relaxed md:leading-loose md:text-lg mb-10">
      	拠点は海外・日本に関わらず、オンラインと対面で英語を教え続けています。このように、小学校6年生の時にこども英会話教室に通い初めてからずっと、英語学習を休んだことがありません。それでも、未だに聞き慣れないアクセントの英語を聞き返したり、洋画でわからない言葉が出てきては辞書を引いています。
        <br/>
        <br/>
        2012年から英語教育に携わっていますが、まだ誰でも簡単に英語がペラペラになれるような決定的な学習法には出会えていませんし、目の前の生徒に教えている学習法は本当にベストなのか常に自問自答をし、新たな学習法の研究を繰り返しています。
      	</p>
      	<div className="flex justify-center mb-10">
      	    <img src={'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684083899/europepic2_jx0zyz.png'} className="-rotate-[5deg] lg:w-[45%] w-1/2" alt={'soichi smiling at the camera sitting at the dinner table with his roommate and friends'}/>
      	    <img src={'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684083898/europepic1_jt2u4v.png'} className="-rotate-[-5deg] lg:w-[50%] w-1/2" alt={'soichi and his choir in Belgium'}/>
      	</div>
        <div className="flex flex-row">
          <p className="text-2xl leading-relaxed md:leading-loose md:text-lg mb-10 lg:mt-10">
      	  ではなぜ、こんなに英語と長く付き合えて、教え続けられるかというと、
          <br/>
          「英語には人生を変える力がある」と信じているからです。
          <br/>
          <br/>
          日本にいたら絶対に起こらない映画のワンシーンのような出来事が、一歩踏み出した世界で待っています。起こる出来事が変われば人生が変わる。可能性を信じて渡米した16歳の私が一番よく知っています。英語と少しの勇気で、いま、一緒に世界へ踏み出してみませんか?
      	  </p>
          <img src={'https://res.cloudinary.com/dc1aiqs4p/image/upload/w_300,h_300,c_fill/v1684083899/europepic3_mfx2pb.png'} className="hidden" alt={'soichi smiling standing in front of castle in France'}/>
        </div>
      </div>
    </div>
  )
}