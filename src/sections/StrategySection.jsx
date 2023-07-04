import StrategyCards from "../components/strategy/StrategyCards";
import StrategyTextbox from "../components/strategy/StrategyTextbox";

export default function StrategySection(){
  const paragraphs = [
    {
      'subtitle': '1. 第二言語習得論をベースにしたアプローチ',
      'text': [
        '言語習得には感覚的な側面が多くあります。しかしそれだけでは個人差ができてしまう。納得のいく理論を求める中で第二言語習得論という学問に出会い、2021年、研究の為ベルギーにある大学院の言語学部に留学しました。',
        '言語習得は奥が深く、誰にでも効く特効薬は未だ見つかっていませんが、この学問の歴史は大変長く、現在進行形で研究がなされています。常に最新の研究結果を知っておけるように日々論文を読み、授業に活かしています。',
        'もう少し詳しく知りたい方の為に、言語学界隈で周知の心理言語学者Levelt(1989)とSlobin(2003)のリスニングとスピーキングの5ステップをご紹介します。',
        '上段はリスニング、下段はスピーキングの時の脳のプロセスです。会話はリスニングとスピーキングの連続ですので、これを繰り返します。'
      ],
      'imgURL': 'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1686585341/five-steps_he3xc5.png',
      'subcategories': [
        {
          'subcatTitle': 'リスニングSTEP 1',
          'text': [
            '「アポー→apple」の部分は「音声知覚」です。言語としての音を認識し、「アポー」と聞いて「apple」と頭の中に英語のスペルを思い浮かべます。'
          ]
        },
        {
          'subcatTitle': 'リスニングSTEP 2',
          'text': [
            '「apple→🍎」の部分は「意味理解」です。頭の中に浮かべた「apple」は「リンゴ」という意味だと理解します。'
          ]
        },
        {
          'subcatTitle': 'スピーキングSTEP 1',
          'text': [
            '「❤️🍊」の部分は「概念化」です。自分が言いたいことを整理します。'
          ]
        },
        {
          'subcatTitle': 'スピーキングSTEP 2',
          'text': [
            '「I like oranges.」の部分は「文章化」です。概念化した内容を頭の中で英文にします。'
          ]
        },
        {
          'subcatTitle': 'スピーキングSTEP 3',
          'text': [
            '「「アイlaイクオreンジーズ」の部分は「音声化」です。文章化した内容を正しく発音します。ここでは、日本語の音には無いLとRを、あえてそのまま表記しています。'
          ]
        },
        {
          'subcatTitle': 'データベース',
          'text': [
            '中央にある「🧠」のマークは「データベース」で、ストックされている語彙や発音知識や文法や定型文を指します。リスニング・スピーキングの各ステップで脳内にアクセスし、知識を瞬時に組み合わせ活用します。',
            '以上の５ステップ＋データベースだけでもそれぞれ役割が違い、別々にトレーニングをする必要があります。英語学習歴が主に受験勉強だった方は、データベースの蓄積はありますが、特に話すトレーニングが不足している為、会話に抵抗があるという状況に陥りやすいのです。決して、努力した受験勉強は無駄ではないということを、ここで強くお伝えしておきます。',
            'また、各スキルを伸ばす為のトレーニングも複数あり、その種類の数だけ教材があり、レベル毎に異なるだけでなく、学習者との相性があります。SO ENGLISH!では、200以上の市販の教材とオリジナル教材を組み合わせ、学習者に合った教材を使用しています。'
          ]
        },
      ]
    },
    {
      'subtitle': '2. 独自のIQ(知識)とEQ(心)トレーニング',
      'text': [
        '多くの学習者の目標である「英語で会話すること」を達成する為には、英語そのものの学習だけでは足りないとSOは考えます。たとえ英語が流暢でも、なぜか会話に入っていけないのです。その多くは文化の違いが原因です。英語を話す文化では、合っているか間違っているか関係なく、自分の意見を述べるということが重要視され、相手に同調することに価値を置く日本人には、言葉以前にそれが難しいのです。',
        'SO ENGLISH!では会話をする上で必要な英語力以外のスキルを、IQ(脳)とEQ(心)に分け、スピーチ、ディベート、宗教、価値観、異文化、多様性、非言語力、積極性などの包括的なトレーニングを通して向上させます。',
      ],
      'trainingList': [
        {
          'listTitle': 'トレーニング・科目例',
          'list': [
            'Whyトレーニング(仮)',
            'プレゼンテーション・スピーチ・ディベート',
            '世界情勢・自分の趣味',
            '全てに対して自分の意見を持つトレーニング',
            'キリスト教・イスラム教・ユダヤ教・仏教・神道',
            'コミュニケーション論',
            'それぞれの文化の違い',
            'ジェンダー・宗教・人種',
            'ジェスチャー・アイコンタクト',
            'トラブルシューティング',
            '自国の文化をどう活かして溶け込むか',
            '勇気の出し方・勇気を出した経験',
            '好奇心を持つ工夫',
            '積極性を出す工夫'
          ]
        }
      ]
    },
    {
      'subtitle': '3. オリジナルのSTUDY RECORDS™',
      'text': [
        'SO ENGLISH!オリジナルの記録用スプレッドシートです。ページ数は18!十年の講師経験をふまえ、3か月かけて作りました。',
        '多くの生徒に共通していることは、勉強そのものの仕方がわからない、ということ。「一人で勉強できるようになること」に焦点を置き開発しました。',
        'このデータ一つで、これまでの学習の歩み、これからの道筋、今年一年間すべきことと詳細のゴールと、日々のレッスン記録を管理でき、生徒と先生の双方がスマホでもパソコンからでもアクセスできるようにしました。'
      ],
      'embeddedVid': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-KXyNeWv62w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      'vidURL': 'https://www.youtube.com/watch?v=-KXyNeWv62w',
      'examples': [
        {
          'title': '例1. Lesson Records レッスンレコード',
          'embeddedVid': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FW4skyIKqto" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
          'text': [
            '授業で毎回使用します。授業の質を最大まで高めるのは予習復習です。レッスン直前になって「宿題なんだっけ？」とばたばたしながら何も準備せず受け、次回はちゃんとやろうと思っても、結局同じことの繰り返しになってしまうのは大変もったいない。',
            'そこで、前回の授業内容と今月の目標と年間の目標が一目でわかり、予習と復習も埋めるだけでもれなくできるものを作りました。'
          ]
        },
        {
          'title': '例2. Evaluations 振り返り',
          'embeddedVid': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/krpNE9iZj9s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
          'text': [
            'SO ENGLISH!では年間目標、ターム(3か月)ごと目標、月間目標を立て、ゴールをできるだけ細分化し、小さな目標を無理なく達成していくことで、楽しく、気が付いたら大きな目標を達成できるという作戦をとっています。',
            '目標をすぐに確認でき、各ターム終了時の振り返りの際に、トレーニング毎の目標達成率と努力点を出し「努力の可視化」をします。そうすることで、多くのトレーニングを満遍なくこなしたり、途中で目標設定を見直し、年末に確実に達成感を持てるようにします。'
          ]
        },
        {
          'title': '例3. Study Progress ガントチャート',
          'embeddedVid': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HWzaRMcVqdA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
          'text': [
            '一つ一つの目標を更に細分化し、小さな目標を達成する為にどれぐらいの期間が必要かをグラフで見られることで、年間目標が現実的かどうか視覚的に確認できます。細かいゴールの終了日が決まっているので、目標達成できない人に多くの共通点である「後回し」を防ぐことを目的としています。',
            'これを使えば、一週間の予定を簡単にたてることができ、一日何時間勉強に割けば良いのかがわかり、管理がしやすくなります。'
          ]
        },
        {
          'title': '例4. Vocabulary 語彙記録',
          'embeddedVid': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PmPQEEmKsjM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
          'text': [
            'ただの語彙を記録するシートではありません。今までの講師経験の中で、これだけは必要だと思う要素を盛り込みました。音声データを作る為のプログラムコードが埋め込んであるので、自分オリジナルの単語帳の音声データを聴きながら通勤通学ができるようになります!',
            'さらに、暗記に効率的な復習タイミング(エビングハウスの忘却曲線)に則ったチェックボックスを用意してあるので、もれなく各自復習をすることができます!'
          ]
        },
        {
          'title': '例5. Others その他',
          'embeddedVid': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sI-4Ri0S5Rg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
          'text': [
            'その他14ページの、各生徒に合わせて使用するトレーニングシートや記録用のシートを用意しています。英語学習以外にも、人生目標の為にも使用できます。(実際SOは自分の為に使っています。)',
            '使い方は授業の中で一緒に覚えていきますし、目標も一緒に決めていきます。このシートを使いながら、言語学習だけでなく、自分の生活や仕事にそのまま活かすことのできる目標設定の仕方、目標を達成する為の作戦の立て方を練習できると思いますよ!'
          ]
        },
      ]
    },
    {
      'subtitle': '4. 授業外時間のモチベーション維持の仕組み',
      'text': [
        'ある生徒から「いろいろ用意してくれているおかげで、授業外でもモチベーションが下がらないでいられる」と言ってもらったことがあります。言語学習にはモチベーション維持の工夫が必要不可欠です。SO ENGLISH!では、一人で勉強したい人、仲間がいる方がやる気が出る人向けに、様々な角度からモチベーションアップのきっかけを提供しています。',
      ],
      'trainingList': [
        {
          'listTitle': 'トレーニング・科目例',
          'list': [
            'Whyトレーニング(仮)',
            'プレゼンテーション・スピーチ・ディベート',
            '世界情勢・自分の趣味',
            '全てに対して自分の意見を持つトレーニング',
            'キリスト教・イスラム教・ユダヤ教・仏教・神道',
            'コミュニケーション論',
            'それぞれの文化の違い',
            'ジェンダー・宗教・人種',
            'ジェスチャー・アイコンタクト',
            'トラブルシューティング',
            '自国の文化をどう活かして溶け込むか',
            '勇気の出し方・勇気を出した経験',
            '好奇心を持つ工夫',
            '積極性を出す工夫'
          ]
        }
      ]
    }
  ]
  return(
    <div id="section4" className="bg-orange-100">
      <div className="flex flex-col px-6 py-24 md:px-24">
        <h2 className="text-5xl md:text-4xl font-semibold text-orange-600">SO's STRATEGY<br/>どうやって英語を話せるようになるの？</h2>
        <StrategyCards />
        { paragraphs ? paragraphs.map((paragraph, idx) => (
          <div key={idx}>
            <StrategyTextbox 
              subtitle={paragraph.subtitle} 
              text={paragraph.text} 
              img={paragraph.imgURL && paragraph.imgURL} 
              subcategories={paragraph.subcategories && paragraph.subcategories} 
              trainingList={paragraph.trainingList && paragraph.trainingList} 
              embeddedVid={paragraph.embeddedVid && paragraph.embeddedVid} 
              examples={paragraph.examples && paragraph.examples}
          />
          </div>
        )) : 'nada'}
      </div>
    </div>
  )
}