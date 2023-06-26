import TextbooksCard from "./TextbooksCard"
import { useState, Fragment } from 'react';
import { GrFastForward, GrRewind } from 'react-icons/gr';


export default function StudyMaterial(){
	const [position, setPosition] = useState(150);

	const textbookWidth = 200; // Width of each textbook
	const flexGap = 12; // Gap between textbooks

	console.log(position)

	const textbookCategories = [
		'①発音トレーニング用フォニックス教材',
		'②基礎文法用教材',
		'③文章化トレーニング用教材',
		'④音声知覚トレーニング用教材',
		'⑤意味理解トレーニング用教材'
	]

	const textbooks = [
		{
			'url': "",
			'title': 'SO ENGLISH!オリジナル'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865331/9784053054821-1024_tkadav.webp',
			'title': '山田 暢彦『中学英語をもう一度ひとつひとつわかりやすく。』(学研教育出版、2011)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865331/gakusan_9784863924888_wh69ij.webp',
			'title': '田地野 彰『「意味順」だからできる! 絵と図でよくわかる 小学生のための中学英文法入門』(Jリサーチ出版、2020)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687283090/6e10bacf-6fa8-4920-87f1-761a673c826e_gcijpo.png',
			'title': 'Raymond Murphy, English Grammar in Use (Cambridge University Press, 2019)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1684865330/71VXvSAlr3L_xixqic.webp',
			'title': '山田 暢彦『NOBU式トレーニング コンプリートコース 話すための中学英語』(IBCパブリッシング、2018)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687283091/f46e2d24-9427-41e1-ab93-e3a24829758e_jru9lm.png',
			'title': 'ETS『公式TOEIC Listening & Reading 問題集』シリーズ (国際ビジネスコミュニケーション協会、2016~)'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687283091/f5bee600-6ec4-4db9-aa28-65e2b257147a_rccqaw.png',
			'title': '藤澤 慶已『聞いて書きとる英語リスニング300問』'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687735378/image_v8tgx6.webp',
			'title': 'TED Foundation. TED. https://www.ted.com/'
		},
		{
			'url': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687735372/textbooktoadd_wwfdoa.webp',
			'title': '小倉慶郎『英語リプロダクション トレーニング』 (DHC出版、2011)'
		},
	]

	const moveToNextImage = () => {
		const newPosition = position - (textbookWidth + flexGap);
		setPosition(newPosition);
	  };
	  
	  const moveToPreviousImage = () => {
		const newPosition = position + (textbookWidth + flexGap);
		setPosition(newPosition);
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
		{textbooks.map((book, idx) => {
  			let categoryIndex = -1; // Initialize category index to -1

  			if (book.title === 'SO ENGLISH!オリジナル') {
  			  categoryIndex = 0;
  			} else if (book.title === '山田 暢彦『中学英語をもう一度ひとつひとつわかりやすく。』(学研教育出版、2011)') {
  			  categoryIndex = 1;
  			} else if (book.title === 'Raymond Murphy, English Grammar in Use (Cambridge University Press, 2019)') {
  			  categoryIndex = 2;
  			} else if (book.title === 'ETS『公式TOEIC Listening & Reading 問題集』シリーズ (国際ビジネスコミュニケーション協会、2016~)') {
  			  categoryIndex = 3;
  			} else if (book.title === 'TED Foundation. TED. https://www.ted.com/') {
				categoryIndex = 4;
			}
		
  			return (
  			  <Fragment key={idx}>
  			    {categoryIndex >= 0 && (
  			      <h3 className="mt-10 leading-relaxed text-xl md:leading-loose font-bold text-slate-900">
  			        {textbookCategories[categoryIndex]}
  			      </h3>
  			    )}
  			    <h3 className="mt-4 text-2xl leading-relaxed md:text-lg font-medium text-slate-900">
  			      {book.title}
  			    </h3>
  			  </Fragment>
  			);
		})}
  	</div>
  )
}