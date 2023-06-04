import { useState, useEffect } from 'react';
import TextbooksCard from "./TextbooksCard"

export default function StudyMaterial(){
	const [selectedOption, setSelectedOption] = useState('');
	const [grayscale, setGrayscale] = useState([false, false, false, false]);

	function handleOptionClick(option) {
		setSelectedOption(option);
	
		if (option === '①基礎文法') {
		  setGrayscale([false, false, false, false, true, true, true, true]);
		} else if (option === '②文章化トレーニング') {
		  setGrayscale([true, true, true, true, false, false, false, false]);
		}
	  }

	  useEffect(() => {
		setGrayscale([false, false, false, false, true, true, true, true]);
	  }, []);

	const textbooks = [
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865331/9784053054821-1024_tkadav.webp',
			'title': '山田 暢彦『中学英語をもう一度ひとつひとつわかりやすく。』(学研教育出版、2011)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865330/81-1FAds5LS_yfetkx.webp',
			'title': '山田 暢彦『中1英語をひとつひとつわかりやすく。改訂版』(学研教育出版、2021)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865331/gakusan_9784863924888_wh69ij.webp',
			'title': '田地野 彰『「意味順」だからできる! 絵と図でよくわかる 小学生のための中学英文法入門』(Jリサーチ出版、2020)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865330/81d3Y-RdcHL._AC_UF1000_1000_QL80__h7uvai.webp',
			'title': '『スーパーステップ中学英文法』(くもん出版、2021)など'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865330/71VXvSAlr3L_xixqic.webp',
			'title': '山田 暢彦『NOBU式トレーニング コンプリートコース 話すための中学英語』(IBCパブリッシング、2018)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865330/81b78hGquyL_qv3wjs.webp',
			'title': '森沢 洋介『どんどん話すための瞬間英作文トレーニング』(ベレ出版、2006)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865330/61Ui-dOqPZL_gxg8yu.webp',
			'title': '山田 暢彦『英語のスピーキングが驚くほど上達する NOBU式トレーニング』(IBCパブリッシング、2016)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865330/71Oq15DZsQL_ddlw0j.webp',
			'title': '山田 暢彦『英会話に必要な瞬発力を身につける NOBU式トレーニング 実践編』(IBCパブリッシング、2017)'
		},
	]

  return (
    <div className="flex flex-col">
    	<div className='px-6 py-24 md:px-24'>
    	  {/* <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">Material</h2> */}
    	  <h3 className="mt-6 font-semibold leading-relaxed md:leading-loose text-2xl md:text-2xl text-[#282828]">
    	  以上の５ステップ＋データベースだけでもそれぞれ役割が違い、別々にトレーニングする必要があります。多くの受験勉強だけしてきた人はデータベースの蓄積はありますが、他のステップのトレーニングをした経験が無いので、会話が出来ないのはその為です。なので決して、頑張った受験勉強は無駄ではなかったということをここで強くお伝えしておきたいと思います。
    	  </h3>
    	  <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
    	  また、各スキルを伸ばす為のトレーニングは複数あり、トレーニングの種類の数だけ教材があり、レベル毎に異なるだけでなく、学習者との相性があります。So ENGLISH!では、市販の教材とオリジナルの教材を組み合わせて学習者に合った教材を使用しています。
    	  </p>
    	</div>
			<div className='pb-24'>
				<div className="flex flex-row w-full justify-center gap-6 text-xl md:text-2xl mb-6">
					<h3 className={`hover-underline-animation hover:cursor-pointer ${selectedOption === '①基礎文法' || selectedOption === '' ? 'selected' : ''}`} onClick={() => handleOptionClick('①基礎文法')}>①基礎文法</h3>
					<h3 className={`hover-underline-animation hover:cursor-pointer ${selectedOption === '②文章化トレーニング' ? 'selected' : ''}`} onClick={() => handleOptionClick('②文章化トレーニング')}>②文章化トレーニング</h3>
				</div>
				<div className="flex flex-row gap-6 items-center justify-center">
					<TextbooksCard textbooks={textbooks} grayscale={grayscale} />
				</div>
			</div>
  	</div>
  )
}