import SectionTextbox from "../components/standalone/SectionTextbox"
import ConsultingBanner from "../components/standalone/ConsultingBanner";
import { Fragment } from 'react'; 

export default function PriceAndSignupSection(){

 const paragraphs = [
    {
      'subtitle': '料金形態',
      'text': [
        'SO ENGLISH!クラスの料金形態・契約内容は単純明快です。契約は縛りなしの１か月ごと、いつでも自由に辞めることができ、教材費も市販の料金で購入できます。(更にコーチングクラス料金には教材費も含まれています)(1月に年会費のみいただいております)',
        'これは、「チャレンジしたい」と思ってくれた方の懸念を少しでも軽減したかったことと、辞めやすさを保つことで、必然的にサービスの質を向上し続けなければならない状況に私自身を追い込みたかったからです。いつまでこの契約形態で続けるかはわかりませんが、この10年間以上一度も契約の縛りを設けたことはなく、有難いことに教室は大きくなり続けていきました。',
      ]
    },
    {
        'subtitle': 'レッスン受講方法',
        'text': [
          '英語プライベートコーチング・レッスン、グループセッション、LGBT個別相談等を受講希望する方々には、まずは60分単発有料カウンセリングを必ず受けて頂いております(ワークショップはカウンセリング未受講者も受けていただけます)。双方が納得のいった形で、きちんとスタートした方が効果があるからです。',
          '通常こういったスクールには入会費があります。入会費を支払うことは覚悟を決めることと同義ですから、その方がモチベーションと学習効果が上がります。',
          'SO ENGLISH!では、入会費をいただかない代わりに、カウンセリングを必ず受けて頂いているのです。ね、こう聞くとただ入会費を支払うよりも、60分もカウンセリングをして、しかもこれからやるべきことが見えるのですから、お得じゃないですか?',
          'とはいえ長年考え、授業の質の向上と学習者のモチベーション維持の為にも、薄利多売はしません。ただ、未来ある若者(25歳以下)には、多少の割引をさせていただきます。私から日本の未来への投資です。',
        ]
      },
      {
        'subtitle': '60分単発有料カウンセリングにつきまして',
        'text': [
          '単発有料カウンセリングでは、60分の時間の中で、新たな取り組みをする理由を聞き、深く話をする過程で、10年以上の講師経験を元に、適格な目標設定、所要期間の算出、教材の選択、オリジナルのトレーニングメニューを作成するものです。',
          '単発のカウンセリングだけ受けて、自身の学習に活かすことももちろん可能です。',
        ]
      },
      {
        'subtitle': '有料カウンセリング詳細',
        'list': [
            '時間:60分',
            '場所:ZOOMオンライン会議',
            '料金:5000円(25歳以下4000円)',
            '支払い方法:銀行振込',
            '申し込み方法:以下のボタンよりお申込みください。メッセージで日時決定、振込先の紹介、必要な準備等ご案内いたします。'
        ]
      },
      {
        'subtitle': '',
        'list': [
            'お申込みお待ちしております。',
            'Today is the first day of the rest of your life!',
            'これからの人生の中で今が一番若いです!今を逃さないで ;)'
        ]
      }
  ]

  const handleBannerClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
  }

  return(
    <div className="w-full bg-white pb-10" id="section7">
      <div className="flex flex-col px-6 py-24 md:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold text-lime-500">料金形態と受講方法(単発60分有料カウンセリングの受け方)</h2>
        {paragraphs && paragraphs.map((paragraph, index) => (
            <Fragment key={index}>
                <SectionTextbox 
                    subtitle={paragraph.subtitle && paragraph.subtitle}
                    text={paragraph.text && paragraph.text}
                    list={paragraph.list && paragraph.list}
                />
            </Fragment>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <ConsultingBanner handleBannerClick={handleBannerClick} />
      </div>
    </div>
  )
}
