export default function ServicesSection(){
    const services = [
        {
            'service' : '1. 英語プライベートコーチング',
            'startDate': '2023年~',
            'capacity': '定員1名/3カ月。',
            'frequency': '3か月間のファストパス。「毎日」英語学習のサポートをします。セッションは月4回、90分/回。LINEでのサポートは24時間受け付けます。',
            'details': [
                '月に数回のプライベートレッスンではフォローしきれない日々の英語学習を、このコースでなら毎日みっちり二人三脚でサポートできます！', 
                '毎日の学習と報告ができると、覚悟を決めた方はぜひお申込みください。3か月後のあなたの目の前には、英語の道が開けているはずです。'
            ],
            'lessonVideo': '',
            'feedback': []
        },
        {
            'service' : '2. 朝活グループセッション(瞑想音読™でリフレッシュ!)',
            'startDate': '2023年~',
            'capacity': '年間定員10名。',
            'frequency': '一か月定額で朝活グループセッションが受け放題! 週4回、Zoomで行います。',
            'details': [
                '「瞑想音読™」という言葉はSOの造語ですが、ある生徒が「毎日音読をしてたら、ゾーン状態に入ることができて、それが心地良い」と言っていたことが由来です。瞑想は言わずと知れた健康法で、幸せホルモンのオキシトシンが出るものですね。音読は最強の英語学習法と、学習者の中で長い間言われ続けていますね。もちろん音読だけでなく、和訳や文法や背景の解説もする予定です!', 
                'お香を焚いたり、太陽の光を浴びながらぜひご参加ください!'
            ],
            'lessonVideo': '',
            'feedback': []
        },
        {
            'service' : `3. SO's Bar 夜活グループセッション(お酒の力で饒舌トーク!)`,
            'startDate': '2023年~',
            'capacity': '年間定員10名。',
            'frequency': '一か月定額で夜活グループセッションが受け放題! 週1回、Zoomで行います。',
            'details': [
                'お酒を飲みながら参加できる掟破りの授業、開講です!もちろんシラフでの参加もOK!雰囲気に酔っぱらってください!よく聞く「酔っている時だとなんか話せる」をヒントにしました。テーマを決めてざっくばらんに英会話をします。時事や自分ニュースについて、楽しく意見交換しましょう。', 
                'お酒が入ることで、「上手く話せなかったらどうしよう」という余計な不安が和らぎます。いつでも力が抜けた状態を目指す為の、練習の場にぜひ！'
            ],
            'lessonVideo': '',
            'feedback': []
        },
        {
            'service' : `4. 英語プライベートレッスン(英会話・試験対策)`,
            'startDate': '2013年~',
            'capacity': '定員約20名。',
            'frequency': '教室を始めてからずっとあるコースです。一回60~120分のレッスンで、月2回~4回、月ごとに予定を調整します。',
            'details': [
                'レッスン内容は目標に合わせて完全オーダーメイドで、心と対話しながら英語との楽しい向き合い方を学んでいきます。', 
                '生徒の皆さんの多くは、長年私と一緒に英語に取り組んでくれていて、更に人生の枠を広げている方ばかりです!'
            ],
            'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5V_AzP5j7nU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            'feedback': []
        },
        {
            'service' : `5. 少人数グループセッション(英会話・非言語力)`,
            'startDate': '2022年~',
            'capacity': '定員4名/回。単発。',
            'frequency': '一回75分のセッションで、月に2回ほど開講しました。',
            'details': [
                'レッスンテキストは完全オリジナルで、プライベートレッスンでは鍛えきれないけど、英会話にとって必要な「非言語力」に焦点を当てた「とにかく楽しく話す」がテーマの授業です。', 
                'ジェスチャーゲーム、連想ゲーム、お絵かきゲーム、ストーリー作り、ロールプレイなど、とにかく盛り上がります!'
            ],
            'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oC6X0JtkmdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            'feedback': []
        },
        {
            'service' : `6. ワークショップ(学習法・マインド)`,
            'startDate': '2022年~',
            'capacity': '定員なし/回。単発。',
            'frequency': '一回90分で年2回~4回ほど行います。',
            'details': [
                '第二言語習得に関する本を嚙み砕いて説明したり、SOが行っている勉強法や時間の作り方、目標達成の仕方、気持ちの切り替え方をお伝えしたりしながら、その場で自分と向き合う時間を作り、他の方々と共有します。', 
                'ワークショップに参加した後は、皆さん俄然やる気になって勉強に取りくんでくれます！'
            ],
            'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oyTeNZnFNbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            'feedback': []
        },
        {
            'service' : `7. LGBTQ+の方向け個別相談&目標設定`,
            'startDate': '友人からの依頼をきっかけに2019年~開講しました。',
            'capacity': '定員約20名',
            'frequency': '一回60~120分で、月2回~4回、月ごとに予定を調整します。',
            'details': [
                '英語レッスンで行う内省(自分を見つめる作業)・目標設定・目標達成の為の作戦立てとマインドトレーニングを軸に、17歳からカミングアウトしていった完全オープンリーGayのSOの経験を踏まえながら、相談者とお話します。', 
                '好きな人との恋が実る為に、どんどん変わっていって自信がついていく相談者を見られることが、一番嬉しいです。'
            ],
            'lessonVideoL': '',
            'feedback': []
        },
        {
            'service' : `8. 翻訳(日→英・英→日)`,
            'startDate': '2015年~',
            'capacity': '',
            'frequency': '以下、実績',
            'details': [
                '語ネイティブと共にダブルチェックを行っているので、高い精度の翻訳をお約束します。'
            ],
            'projectsList': [
                '大使館会議の議事録の英訳(2年間毎月)',
                '輸入雑貨添付の説明書の和訳(単発数回)',
                '企業のプレゼン資料の英訳・和訳(単発数回)',
                '大学教授の研究論文の和訳(一部)(単発数回)'
            ],
        },
        {
            'service' : `9. 日本語クラス(Private lessons / coaching / group classes)`,
            'startDate': '2022年~',
            'capacity': '',
            'frequency': '',
            'details': [
                'Private lessonとcoachingとgroup classの3種類の形態で教えています。',
                '英語教授法をそのまま活かし、英語で日本語を教える、独自のやり方です。',
                '年間100レッスンほど行っています。'
            ],
            'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0dufpsj1mUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            'feedback': []
        },
        {
            'service' : `10. Podcastラジオ配信『That's So Carrot! ~英語があれば結局ポジティブLife~』（学習法・マインド）`,
            'startDate': '2021年~',
            'capacity': '',
            'frequency': '基本週1回土曜18時に配信。',
            'details': [
                '留学経験豊富なラジオパートナーのキャロ先生と一緒にゆるく話しています。',
                '大人気の公開収録は年に2回ほど。大体いつも6月と12月、参加型収録で大盛り上がり。皆さんの英語学習での気づきや、海外生活でおかしかった話を聞かせてください!',
                `合言葉は、Oh my goodness! "That's So Carrot!`
            ],
            'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/05ITvNeqS0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
            'feedback': []
        },
        {
            'service' : `12. その他の仕事`,
            'startDate': '',
            'capacity': '',
            'frequency': '',
            'details': [
                '著名な先生方と共に、日常英会話・TOEIC・接客英会話のクラスを持っていました。',
            ],
            'projectsList': [],
            'lessonVideo': '',
            'feedback': ''
        },
    ]

    return (
        <div className="w-full" id="section4">
            <div className="flex flex-col px-6 py-24 md:px-24">
                <h2 className="text-5xl md:text-3xl font-semibold text-slate-900">SOがお手伝いできること・してきたこと</h2>
                <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">英語の先生ですが、LGBTQ+の相談も、翻訳も、日本語の先生も、ラジオパーソナリティーもやります。</p>
            </div>
        </div>
    )
}