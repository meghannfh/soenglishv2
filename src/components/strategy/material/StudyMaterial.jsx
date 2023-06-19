import TextbooksCard from "./TextbooksCard"
import { useState } from 'react';
import { GrFastForward, GrRewind } from 'react-icons/gr';


export default function StudyMaterial(){
	const [position, setPosition] = useState(280);

	console.log(position)

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

	const moveToNextImage = () => {
		setPosition(prevPosition => {
			if(prevPosition === 0){
				return prevPosition + 80;
			} else {
				return prevPosition + 200;
			}
		});
	  };
	
	  const moveToPreviousImage = () => {
		setPosition(prevPosition => {
			if(prevPosition === 80){
				return prevPosition - 80;
			} else {
				return prevPosition - 200;
			};
		});
	  };

  return (
    <div className="flex flex-col my-24">
		<div className="flex flex-row gap-2 items-center justify-center mb-20">
			<button className="text-5xl" onClick={moveToPreviousImage}>
				<GrRewind />
			</button>
			<TextbooksCard textbooks={textbooks} position={position}/>
			<button className="text-5xl" onClick={moveToNextImage}>
				<GrFastForward />
			</button>
		</div>
		{textbooks.map((book, idx) => (
        	<h3 key={idx}>{book.title}</h3>
      	))}
  	</div>
  )
}