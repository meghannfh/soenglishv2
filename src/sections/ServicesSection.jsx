import ServicesCard from "../components/services/ServicesCard"

export default function ServicesSection(){
  const services = [
    {
      'service' : '1. 英語プライベートコーチング',
      'startDate': '2023年~開講',
      'capacity': '定員1名/3カ月。',
      'frequency': '短期集中の<b>ファストパス</b>。「毎日」英語学習のサポートをします。セッションは月4回、90分/回。LINEでのサポートは24時間受け付けます。',
      'details': [
        '月に数回のプライベートレッスンではフォローしきれない日々の英語学習を、このコースでなら毎日みっちり二人三脚でサポートできます！', 
        '毎日の学習と報告ができると、覚悟を決めた方はぜひお申込みください。3か月後のあなたの目の前には、英語の道が開けているはずです。'
      ],
      'lessonVideo': '',
      'feedback': []
    },
    {
      'service' : '2. 朝活グループセッション(瞑想音読™でリフレッシュ!)',
      'startDate': '2023年~開講',
      'capacity': '年間定員10名。',
      'frequency': '一か月定額で朝活グループセッションが受け放題! 週4回、Zoomで行います。',
      'details': [
        '<b>「瞑想音読™」</b>という言葉はSOの造語ですが、ある生徒が「毎日音読をしてたら、ゾーン状態に入ることができて、それが心地良い」と言っていたことが由来です。<b>瞑想</b>は言わずと知れた健康法で、幸せホルモンのオキシトシンが出るものですね。音読は最強の英語学習法と、学習者の中で長い間言われ続けていますね。もちろん音読だけでなく、和訳や文法や背景の解説もする予定です!', 
        'お香を焚いたり、<b>太陽の光を浴びながらぜひご参加ください!</b>'
      ],
      'lessonVideo': '',
      'feedback': []
    },
    {
      'service' : `3. SO's Bar 夜活グループセッション(お酒の力で饒舌トーク!)`,
      'startDate': '2023年~開講',
      'capacity': '年間定員10名。',
      'frequency': '一か月定額で夜活グループセッションが受け放題! 週1回、Zoomで行います。',
      'details': [
        'お酒を飲みながら参加できる<b>掟破りの授業</b>、開講です!もちろんシラフでの参加もOK!雰囲気に酔っぱらってください!よく聞く<b>「酔っている時だとなんか話せる」</b>をヒントにしました。テーマを決めてざっくばらんに英会話をします。時事や自分ニュースについて、楽しく意見交換しましょう。', 
        'お酒が入ることで、「上手く話せなかったらどうしよう」という余計な不安が和らぎます。いつでも<b>力が抜けた状態</b>を目指す為の、練習の場にぜひ！'
      ],
      'lessonVideo': '',
      'feedback': []
    },
    {
      'service' : `4. 英語プライベートレッスン(英会話・試験対策)`,
      'startDate': '2013年~開講',
      'capacity': '定員約20名。',
      'frequency': '教室を始めてからずっとあるコースです。一回60~120分のレッスンで、月2回~4回、月ごとに予定を調整します。',
      'details': [
        'レッスン内容は目標に合わせて<b>完全オーダーメイド</b>で、心と対話しながら英語との楽しい向き合い方を学んでいきます。', 
        '生徒の皆さんの多くは、長年私と一緒に英語に取り組んでくれていて、更に人生の枠を広げている方ばかりです!'
      ],
      'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5V_AzP5j7nU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      'feedback': [
        {
          'studentName': 'Kさん',
          'comment': 'English abilityがbeginnerのため、毎回のレッスンは取り繕うことができず、それゆえ素の自分でいるしかなく、だからこそ見えてくる自分の本質に、時に照れたり落ち込んだり、気づかされて驚いたり等、英語学習を通じて自分を知り、自分磨きができた一年だと感じています。生涯続けていきたいものに出逢えたことは感謝だし、So先生が外国にいてもレッスンを続けてくださることも感謝だし、英語があると狭くて小さな自分が広く大きくなるような気分で、とてもhappyです。長く続けるためには好奇心を持って自ら積極的に関わる必要があるし(ツライことは続かない)、そのためには何より心の躍動感が大切だと再認識しました。学生時代に出来なかった楽しみながら英語に触れるチャンスが今、手に入れっていることに感謝です。今後とも引き続きよろしくお願いします。'
        },
        {
          'studentName': 'Pさん',
          'comment': '海外生活に慣れるまで時間もかかった事だと思います。そんな中でも、Podcastやインスタを通していつでも気にかけてくださっていてくれた事が、英語諦めたくない!(もがいて立ち止まってしまいましたが)と思い続けることができました。離れていても側に居てくれる感じがします。 ご自身の勉学もあると思いますが、引き続きレッスン楽しみにしています！'
        },
        {
          'studentName': 'Hさん',
          'comment': 'そう先生は、授業をしていると言う硬い感じで無く、そう先生が外人にしか見えない位の雰囲気と発音の良さで心が上がります。その中でアドバイスと分かりやすい具体的な勉強方法を教えて頂きありがとうございます。今年もありがとうございました。来年もよろしくお願い致します。'
        },
        {
          'studentName': 'Mさん',
          'comment': '色んな工夫満載、常に精度上げてブラッシュアップしていく姿勢、尊敬です。私の浮き沈みの激しいペースにも、うまーく気持ち引き上げてくれてありがとうございます！そうでなかったら、続けられてたかどうか！？'
        },
        {
          'studentName': 'Nさん',
          'comment': '途中からベルギー留学とお忙しい中でも、レッスンを続けてくださりありがとうございました！英語レッスンのみならず、そーちゃんからは、毎回元気をもらっています。私の性格もよくわかっていて…いつも的確なご指摘をありがとう。そーちゃんが先生でなければ、続いていなかったと思います。来年もよろしくお願いします。'
        },
        {
          'studentName': 'Kさん',
          'comment': `I'm very glad to take your lessons!Thank you for considering the best way to improve my English. I'll keep doing my best!`
        },
        {
          'studentName': 'Hさん',
          'comment': 'Thanks a million 😃Your smile makes  everyone happy! I look forward to having your lessons next year too.'
        },
        {
          'studentName': 'Nさん',
          'comment': 'ずっと寄り添い、少しでもできると褒め、自分以上に喜び、落ち込んでると励まして下さってありがとうございました!こんなに生徒のことを考えてくれる先生は、先生以外に知りません!so先生に習ったからこそ、嫌いな英語を続けられました^ ^来年もよろしくお願いします！'
        },
        {
          'studentName': 'Kさん',
          'comment': 'そう先生が、先生で良かったです!Thank you very much.'
        },
        {
          'studentName': 'Kさん',
          'comment': 'いつもありがとう。そーちゃんのお陰で英語が楽しく勉強出来てます。嬉しいです❗️また、いつも挑戦してる姿を見せてくれて、さらに頑張れます。共に成長していきたいですね。また、来年も宜しくお願い致します。'
        },
        {
          'studentName': 'Eさん',
          'comment': 'ほんとお世話になりました。自由にやりたい事をやってる、 その為に、頑張ってるそう先生だからこそのレッスンだと思います。 楽しむことがでる! って1番の栄養です。 それを体験し実践できたのは、そう先生だからだと思ってます。 来年も宜しくお願いします。'
        },
        {
          'studentName': 'Hさん',
          'comment': '勉強嫌いの私が英語のレッスンを続けられているのは、そう先生だからです。英語の内容は勿論のこと、 生き方も先生からは大変刺激を頂いてます。'
        },
        {
          'studentName': 'Kさん',
          'comment': '日本の枠に留まらない先生に出遭えたから、私の意識も天井 知らずに広がっていると思います。 今年は英語に懐かしさす ら覚える瞬間もあり、けして簡単ではない英語の世界を愛い っぱいに届けてくださりありがとうございました。'
        },
        {
          'studentName': 'Pさん',
          'comment': '今年はSo先生のフォローに何度救われたか。本当に酷い精神状態で自分が消える事ばかりを考えていた時だったので本当救われました。濃い1年でしたね~笑来年もSo先生の工夫いっぱいのレッスンもですがSo先生にお会い出来る事を楽しみにしています。So先生の生徒で良かったです。手のかかる生徒ですが来年もよろしくお願いします。'
        },
        {
          'studentName': 'Tさん',
          'comment': `Hi, Teacher So! Thank you for helping me with Great English advice. Can't believe it's already been three months since we met! it's gone by so fast. I'm glad we are like old friends, It was a great time all lessons. This year will soon be over and I appreciate you for helping me !! Have a Happy New Year🎍🎍🎍`
        },
        {
          'studentName': 'Mさん',
          'comment': `相変わらずやること追いついてないですが、見捨てず、やる気をそぐことなく、継続してみてくださってありがとうございます！！ オンライン英会話への苦手意識はすっかりなくなりました♪背中推してださってありがとうございました♪`
        },
      ]
    },
    {
      'service' : `5. 少人数グループセッション(英会話・非言語力)`,
      'startDate': '2022年~開講',
      'capacity': '定員4名/回。単発。',
      'frequency': '一回75分のセッションで、月に2回ほど開講しました。',
      'details': [
          'レッスンテキストは完全オリジナルで、プライベートレッスンでは鍛えきれないけど、英会話にとって必要な<b>「非言語力」</b>に焦点を当てた「とにかく楽しく話す」がテーマの授業です。', 
          'ジェスチャーゲーム、連想ゲーム、お絵かきゲーム、ストーリー作り、ロールプレイなど、とにかく盛り上がります!'
      ],
      'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oC6X0JtkmdU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      'feedback': [
        {
          'studentName': 'Tさん',
          'comment': `☆自分がよくできたところ<br/>発音を意識しながら大きな声ではっきりと音読や発音練習ができました。<br/>☆次回やりたいこと<br/>ジェスチャーもたくさん入れて、もっと感情豊かに話せるようにする。<br/>☆今日学んだところ<br/>会話の出だしや、会話の受け答えには 決まったパターンがあるのでそれを覚えていくと 会話がよりいっそう弾むことがよくわかりました。<br/><br/>☆感想<br/>今日はNewメンバーで新鮮でした。<br/>だれを同じグループになっても毎回楽しい レッスンで、あっという間に終ってしまいます。 今日習ったことを少しでもたくさん覚えて、日常で使えるようになりたいです。ありがとうございました。`
        },
        {
        	'studentName': 'Rさん',
        	'comment': `(良く出来た事)<br/>積極的に話すことが出来た時もあった。<br/>(改善点)<br/>・ジェスチャーももっと大きく出来れば良かった。<br/>・一言で英文を終わらせずもっと話しても良かった。<br/><br/>(感想)<br/>・想像力を使って文を考えるのが難しかった。<br/>・みんなで話している時は積極的に話せる時もあったが、マンツーマンになった場合に上手く話そうとしてしまったので気をつけたいと思いました。<br/>・とても良い雰囲気のレッスンで楽しかったです。ありがとうご ざいました。`
        },
        {
          'studentName': 'Mさん',
          'comment': `今日もグループレッスンありがとうございました。会話はなりきって練習するのと、どんな場面なのか想像して練習する ことにより、より自分の言葉として入って来ました。課題はご指摘いただいたとおり間をあけず、パン、パン、パンと言えるように意識して練習します。ありがとうございました!`
        },
      ]
    },
    {
      'service' : `6. ワークショップ(学習法・マインド)`,
      'startDate': '2022年~開講',
      'capacity': '定員なし/回。単発。',
      'frequency': '一回90分で年2回~4回ほど行います。',
      'details': [
        '<b>第二言語習得</b>に関する本を嚙み砕いて説明したり、SOが行っている勉強法や時間の作り方、目標達成の仕方、気持ちの切り替え方をお伝えしたりしながら、その場で自分と向き合う時間を作り、他の方々と共有します。', 
        'ワークショップに参加した後は、皆さん俄然やる気になって勉強に取りくんでくれます！'
      ],
      'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oyTeNZnFNbQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      'feedback': [
        {
          'studentName': 'Uさん',
          'comment': `先日はワークショップありがとうございました。想像をはるかに越えた内容だったので、これだけのものを準備するのにどれほど時間がかかったのかと思うと本当に有難い講座でした!下から山を登って頂上が見えず模索している状態でしたが、ドローンで 上から見渡したような気持ちになれました〜。自分の現在地やいろいろ考え方や勉強方があるのがわかりました(^-^)特に手続き的知識は英語以外にも自分の生き方や仕事にも取り入れたい と思います !いつも新しい視点を教えて頂いてありがとうございます。`
        },
        {
          'studentName': 'Jさん',
          'comment': `ワークショップに参加させていただき、 ありがとうございました。一夜明けても、まだワクワクしている(Jさん)です。それぐらい、スペシャルな時間でした!<br/>そうとうな時間を費やして準備してくださったこと、ほんとうにありがとうございます。本気で、本気でみんなに習得してほしい!と思ってくれている気持ちがすごく伝わって、嬉しくて泣きそうになりました。<br/>しかも、あらゆる教材や、聞くだけでマスターできるものなど、日々そういう色々なものまで試してくださっていることにも驚愕です!よりよいものがあるなら取り入れたりオススメしたいって思ってらっしやるからですよねありがたすぎます。昨日も、そしてラジオでも何度も言ってくれている「過程を楽しむ」これを大切にします♡<br/>私が「楽しく笑顔で英語を話している新しい自分に変わりたい!」と言ったときに「いいですねー!メッチャ想像できますよ!」と、間髪入れずに言ってもらえたこともめっちゃ嬉しかったです!毎日一時間は必ず!と決めてしまうと続かないことは目にみえている私。けれども継続したいので、毎日必ず 「少しでも」 やる、そう決めました!そう思わせてくださり、ありがとうございます。本気で習得したいから、時間の使いかたもみなおします。覚悟を決める大切さ!何かをやめる大切さ!こんな気持ちにさせてもらえる、スペシャルな時間を、ほんとうにありがとうございました。`
        },
        {
          'studentName': 'Eさん',
          'comment': `SO先生、 ワークショップありがとうございました!3回も参加させていただき本当にありがとうございました。何をやろう?どうすれば?というところがスゴく明確になったのと、自分のレベルを改めて見つめ直す機会になりました。<br/>1回目、参加した時は、手続き的知識ばかりに意識がいってましたが、2回目で、いや、そもそも私、宣言的知識が全く足りてなくない?というところに気づけました。なので、初心者用の単語帳も文法書も買いました笑<br/>勉強を始めた当初は、いきなり英検2級レベルの単語帳を買って挫折した)<br/>あと、どうせ英語を話すならカッコよく話したい欲もあるので、発音も 良くなりたいと思っていました。 (個人的にモノマネは楽しくて好き)フォニックスのルールを知っているかいないかで大きく変わるなぁと 感じています。 フォニックスは毎日、練習しようと思います!`
        },
        {
        	'studentName': 'Tさん',
        	'comment': `こんにちは。ワークショップの動画とファイルを送って頂き、ありがとうございました。 見直して、 しっかり自分の中に落とし込みたいと思います。難しいことも簡潔に分解して説明くださったので、 とても分かりやすか ったです。昨夜もモチベーションがまたまた上がりました(^-^)/ありがとうございました♡!`
        },
        {
          'studentName': 'Kさん',
          'comment': `そう先生。おはようございます。改めまして昨夜のワークショップ、 遅くまで沢山のお話、ありがとうございました。改めまして感想を。英語学習、 一人(独学)じゃ無理やな。を実感しました。引き続きよろしくお願いします。英語に触れることで得られる本質を見つめ続けて、今年も日々精進し、英語道を邁進したいと思います。新しい1年、改めてよろしくお願いします.`
        },
        {
          'studentName': 'Nさん',
          'comment': `モチベーション上がるし目標立てられるし、勉強の具体的な方法(と、 これって本当にできるようになるの?という気持ちになった時に、それを抑えてくれる理論)を教えてもらえて、一石二鳥どころか三鳥四鳥それ以上な時間を、本当にありがとうございます。あ、わたしも子どもの未来についての話し合いに参加したい!ので、英語がんばります。今日はありがとうございました!!`
        },
      ]
    },
    {
      'service' : `7. LGBTQ+の方向け個別相談&目標設定`,
      'startDate': '友人からの依頼をきっかけに2019年~開講しました。',
      'capacity': '定員約20名',
      'frequency': '一回60~120分で、月2回~4回、月ごとに予定を調整します。',
      'details': [
          '英語レッスンで行う<b>内省(自分を見つめる作業)・目標設定・目標達成の為の作戦立てとマインドトレーニング</b>を軸に、17歳からカミングアウトしていった完全オープンリーGayのSOの経験を踏まえながら、相談者とお話します。', 
          '好きな人との恋が実る為に、どんどん変わっていって自信がついていく相談者を見られることが、一番嬉しいです。'
      ],
      'feedbackImgURL': [
        'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687406154/S__78233620_dfivpq.webp',
        'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687406154/S__78233658_uytrqm.webp',
        'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687406154/S__78233618_kmfvpw.webp'
      ],
      'adviceReportExample': [
        'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687791373/Reviews/S__78233621_cv7mkz.webp',
        'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687791373/Reviews/S__78233622_yafemt.webp'
      ]
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
      'startDate': '2022年~開講',
      'capacity': '',
      'frequency': '',
      'details': [
        'Private lessonとcoachingとgroup classの3種類の形態で教えています。',
        '<b>英語教授法をそのまま活かし、英語で日本語を教える、独自のやり方</b>です。',
        '年間100レッスンほど行っています。'
      ],
      'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0dufpsj1mUw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      'feedback': [
        {
          "studentName": "",
          "comment": `So-sensei is the best teacher that I've had here, and maybe one of the best Japanese teachers I've ever had. He makes each lesson super helpful and enjoyable at the same time. With his knowledge of linguistics, he has a more precise understanding of the language. He's able to not only explain grammar points and vocabulary, but point out subtleties and explain why the grammar points work the way they do. My favorite aspect about So-sensei that sets him apart from any teacher I've had is his willingness to accommodate your needs. I have asked previous teachers before to call out any collocation errors or unnatural patterns in my language, and though they tell me not to worry and that they will, they end up just letting my errors go. However, So-sensei listened to my request and diligently caught every one of my errors. I could feel my control of the language improve throughout the lesson all because of So-sensei's guidance. His lessons are truly the best and incredibly engaging!<br/><br/>(訳)So先生は、私がここで受けた中で最高の先生であり、おそらく今まで受けた日本語の先生の中でも最高の先生の一人だと思います。彼は毎回のレッスンをとても役に立ち、同時に楽しいものにしてくれます。言語学の知識を持つ彼は、言語についてより正確に理解しています。文法事項や語彙を説明するだけでなく、微妙な点を指摘し、なぜその文法事項がそのように機能するのかを説明することができるのです。私が今まで受けたどの先生とも違う、So先生の好きな点は、こちらの要望に応えてくれることです。今までの先生には、コロケーションの間違いや不自然なパターンがあれば指摘してほしいとお願いしたことがあるのですが、「心配しないでください」「そうします」と言われるものの、結局はそのまま放置されてしまうんです。しかし、So先生は私の要望を聞いてくださり、一つひとつの誤りを熱心にキャッチしてくださいました。先生の指導のおかげで、レッスンの間中、自分の言語コントロールが向上していくのを実感しました。先生のレッスンは本当に最高で、とても魅力的です!`
        },
        {
          "studentName": "",
          "comment": `ここで珍しくて良い先生です。授業の前に、授業スタイルについての詳しいアンケートを取ってくれました。授業中に文法や発音の間違いも逐一指摘して、チャットで送ってくれました。授業の雰囲気もめちゃくちゃ和やかで、いつでも気楽に沢山話せます。極めて能力がある先生だと思います。日本語能力をアップしたい方は是非so先生を選んでくださいね^ - ^。`
        },
        {
          "studentName": "",
          "comment": `My native languages are both English and Mandarin, so I am already familiar with Chinese characters which would give me an advantage over Kanji.  I'm also a musician and I speak three different tonal languages, and So Sensei took this into consideration to help me to sound as natural as possible and even used language exercises that are similar to those that professional interpreters perform in interpretation school to speak more like native speakers in our working languages.  I would definitely recommend you to take classes with So Sensei!  He's an amazing and professional teacher!<br/><br/>(訳)私は英語と北京語を母国語としているので、漢字にはすでに慣れており、その点漢字は得意です。 私は音楽家でもあり、3つの異なる音調の言語を話します。So先生は、私ができるだけ自然に聞こえるようにこのことを考慮し、プロの通訳者が通訳学校で行うのと同じような言語練習まで使って、私たちの作業言語でよりネイティブに近い話し方をするようにしてくれました。 私は絶対にSo先生の授業を受けることをお勧めします! 彼は素晴らしく、プロフェッショナルな先生です！`
        },
        {
					"studentName": "",
					"comment": `そう先生、いつも楽しい話をありがとうございます！`
        },
        {
          "studentName": "",
          "comment": `疲れ切ってるコロナ生活の中、so先生のレッスンは救いような存在です。気楽になんでも話せて楽しかったのです。`
        },
        {
          "studentName": "",
          "comment": `So先生がベルギーにいる最後のレッスンで、なんだかこっちも少々寂しくなった気分だったが、先生が日本に戻ったら、時差なしでレッスン受けれることを考えたら、待ちきれないのです。^_^いつも友達と余談している気分で、お互いに趣味のことをシェアしたり、身の回りに起きた出来事を話したりして、こんなに物事の考え方が一緒な人って、親友以外初めて出会いました。このアプリをダウンロードしたのは偶然だったし、So先生のレッスンを予約したのも「一か八か」という気持ちだったけれど、これらの偶然のピースを一つずつ合わせ、必然に導いてくれたと信じてます。この「一期一会」をこれからも大事にしていきたいと思います。`
        },
        {
          "studentName": "",
          "comment": `Thank you, So, for another great lesson. We talked about a variety of topics, and reviewed a pair of similar words that came up in a previous lesson. Even though he had already explained it before, he still patiently went through numerous sample sentences with me. I'm finding that through our lessons, I'm learning more and more about various cultural aspects of Japan. If you're looking for a dynamic, engaging, and extremely qualified teacher, you should try a lesson with So!<br/><br/>(訳)Soさん、今回も素晴らしいレッスンをありがとうございました。様々なトピックについて話し、前のレッスンで出てきた似たような単語のペアを復習しました。前に説明したことがあるにもかかわらず、それでも根気よく何度もサンプル文を一緒に見てくれました。レッスンの中で、日本の様々な文化的側面について、どんどん学んでいることを実感しています。ダイナミックで、魅力的で、非常に優秀な先生を探しているのなら、ぜひSo先生のレッスンを受けてみてください!`
        },
        {
          "studentName": "",
          "comment": `Another brilliant lesson. As expected, he made the lesson a perfect balance between enjoyment and learning. He made sure to incorporate relevant vocabulary into the lesson based on what I found interesting. I also cannot emphasize enough just how amazing of a teacher he is for taking the time and effort to correct any error I make no matter how big or small. Truly, I think this is crucial to becoming not just someone whose Japanese is understandable and passable but also natural sounding. Most other teachers will let you continue speaking as long as the errors you make are not that serious so I find it difficult to improve. But So always corrects my Japanese and gives me the most natural sounding way of expressing myself. His knowledge of English is also extremely helpful in this regard when we get to the more subtle questions. I also love that he has a never-ending wealth of encouragement that makes me feel like making mistakes is fine. He's really just the best teacher out there.<br/><br/>(訳)今回も見事なレッスンでした。予想通り、楽しむことと学ぶことのバランスが絶妙なレッスンをしてくださいました。私が面白いと思ったことをもとに、関連する語彙をレッスンに取り入れるように心がけてくれました。また、私の間違いの大小にかかわらず、時間と労力をかけて訂正してくださる先生のすばらしさは、いくら強調してもしきれません。本当に、このことは、単に日本語が理解できる、通じるだけでなく、自然な発音ができる人になるために重要だと思います。他の先生方は、よほど大きな間違いでない限り、話し続けることを許してくれるので、なかなか上達しません。しかし、Soはいつも私の日本語を修正し、最も自然な表現方法を教えてくれます。また、微妙な質問になると、彼の英語の知識はこの点でも非常に役に立ちます。また、失敗しても大丈夫と思わせてくれるような励ましの言葉が尽きないのも魅力です。本当に最高の先生です。`
        },
        {
          "studentName": "",
          "comment": `初めてのレッスンで、少々不慣れなところはありましたが、普段日本語会話する機会が全くない私に友達のように話してくれて、楽しかったです。言語って、やはり面白いだなぁと改めて思わせてくれました。本当にありがとうございました。`
        },
        {
         "studentName": "",
         "comment": `いつもありがとうございます。何でも話題ならお話しが出来てとても嬉しいです。これからもカジュアルな日本語を練習していきましょう＾＾`
        },
        {
          "studentName": "",
          "comment": `So先生は素晴らしいです!友達のようになんでも話せます。先生ともっと話すために、日本語を勉強しないと^ ^`
        },
        {
         "studentName": "",
         "comment": `I appreciate how kind So Sensei is and just how patient they were with my choppy Japanese. I felt supported to try again and was provided corrections after the session.<br/><br/>(訳)So先生はとても親切で、私のたどたどしい日本語にどれだけ耐えてくれたか、感謝しています。また、セッションの後に添削をしていただき、再チャレンジのサポートをしていただきました。`
        }
      ]
    },
    {
      'service' : `10. Podcastラジオ配信『That's So Carrot! ~英語があれば結局ポジティブLife~』（学習法・マインド）`,
      'startDate': '2021年~基本週1回土曜18時に配信。',
      'capacity': '無料。',
      'frequency': '',
      'details': [
        '留学経験豊富なラジオパートナーのキャロ先生と一緒にゆるく話しています。',
        '大人気の公開収録は年に2回ほど。大体いつも6月と12月、参加型収録で大盛り上がり。<b>皆さんの英語学習での気づきや、海外生活でおかしかった話を聞かせてください!</b>',
        `合言葉は、Oh my goodness! "That's So Carrot!`
      ],
      'lessonVideo': <iframe width="100%" height="100%" src="https://www.youtube.com/embed/05ITvNeqS0U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      'feedback': [
        {
          "studentName": "",
          "comment": '毎回、衝撃的（笑撃的）で、３つに絞るのは地獄。なくらい楽しみにしてます。'
        },
        {
          "studentName": "",
          "comment": `That's so carrot の大ファンのつもりでしたが、まだこんなに聞いてないエピソードがあったなんて、ファンとして恥ずかしいわ！でもまだ聞いてないエピソードがあると、まだまだ聞く楽しみがあって嬉しくもあります笑<br/><br/>お二人の価値観には共感するばかりだし、聞きながらいつもとても元気をもらってます。あ！外で聞く時は、つい笑っちゃうからニヤニヤした顔を隠すためにマスクが必須です！笑`
        },
        {
          "studentName": "",
          "comment": '軽い感じでズバリ必要なこと重要なことをありがとうございます🌈🌏'
        },
        {
          "studentName": "",
          "comment": 'Soくんとキャロちゃんの深くて厚い信頼が、こちらまで届きます。笑顔になれるラジオをありがとう。'
        },
        {
          "studentName": "",
          "comment": 'いつも2人のトークから色んな知識をもらったり、多様性ってなんだろって一緒に考えさせてもらったり、兎に角受け身ではなく、自分もその場にいる様な感じで、本当にお気に入りPodcast!<br/><br/>2人のトークが押し付けなく、分からないことは『教えて』とか知らないことを恥じてないところや、素直に聞き合う姿勢がとても好き。2人の様な関係性が、もっと他の人にもできたらなって思う、それくらい2人のやり取りに癒される!いつもありがとう！'
        },
        {
          "studentName": "",
          "comment": '内容じゃなくてごめんなさい。でも、2人とも、耳心地が良い声してます!'
        },
        {
          "studentName": "",
          "comment": '二人の掛け合いが最高！いろんな視点からの話が面白い！'
        },
        {
          "studentName": "",
          "comment": 'お2人の柔らかい話し方と声が好きです^_^キャロ先生の「〇〇したいと思いまぁーーす♪」っていう言い方が特に好きで隠れファンです。よくこんなにも話題が出てくるなぁと思うくらい話題豊富なお2人。きっと色々な事に興味があって意識していて、日々を大切に過ごしているからなんだなぁと思います。ラジオをずっと続けていることもすごいですよね。英語学習もですが、続けることの大切さを教えてもらっている気がします^_^'
        },
        {
          "studentName": "",
          "comment": 'なにかをしながら聴くというよりは、一言も聴き逃したくない〜という想いで、気がつけばいつも ものすごく集中して聴かせていただいています。お二人のお話がほんとうに好きです🎶'
        },
        {
          "studentName": "",
          "comment": '毎回、楽しく聴かせてもらってます！週一での更新大変だと思いますがこれからも楽しみに待ってまーす！'
        },
        {
          "studentName": "",
          "comment": '毎回、散歩しながらか、車の運転中、楽しみに聞いています。毎回、勉強になり、自分の考え方とか、視野が広がりました。これからも楽しみにしてます！'
        },
        {
          "studentName": "",
          "comment": 'お二人がいつも明るくて元気を頂いてます！自分にない視点も聞けるのでとってもためになります。'
        },
        {
          "studentName": "",
          "comment": 'いつも、いつも面白くて、楽しくて、聞いてると心がホッコリ暖かくなるラジオをありがとうございます!このラジオはなぜだか、私の英語学習の1番のモチベーションになるんです!笑聞き終えるともう次の回が早く来ないかなぁーと楽しみになります^^このラジオを通して、お会いした事はないけれど、なぜだかお会いした気持ちになってしまう素晴らしいリスナーさん達!いつかほんとにお会いしたいです♡お2人はお仕事もやりながらのラジオで大変だと思いますが、出来れば毎週土曜日聴きたいですが笑無理なくお2人のペースでラジオ楽しんで下さいねー♡'
        },
        {
          "studentName": "",
          "comment": 'お二人の、ゆるくもあり、真剣なトークに、共感したり、そういう考え方もあるかぁ〜と、価値観の幅?を広げてもらったり、とても楽しく拝聴しています。これからも、楽しみにしています!ちなみに、私はYouTube派です。お二人の笑顔にとても癒やされます!'
        },
        {
          "studentName": "",
          "comment": '毎回、いっぱいポジティブになってモチベーションが上がります。電車の中でもどこでも、聴いている時…自分が＂微笑み顔＂なっていることに、先日気づきました！笑お二人の会話、雰囲気がとても楽しくて好きです^_^'
        },
        {
          "studentName": "",
          "comment": 'お二人のラジオ、本当に聴き心地が良いです。英語のことからいろんな方面に話題に広がり、いつの間にやら毎回のeducational channel。英語、海外の知識だけでなく、物事の捉え方、考え方まで、いろんなことを教えてもらっています。お二人が同年代ということで、ドンピシャな話題が多々。人生豊かにしていただきありがとうございます!'
        },
        {
          "studentName": "",
          "comment": 'いつも、英語学習だけでなく人生においても元気、やる気、勇気をもらっています！'
        },
      ]
    },
    {
      'service' : `11. その他の仕事`,
      'otherList': [
        {
          "title": "専門学校教員(都内3校)",
          "detail": "著名な先生方と共に、日常英会話・TOEIC・接客英会話のクラスを持っていました。",
          "imgURL": "https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687666327/S__78249990_v3b9bp.webp",
          "feedback": [
            {
              "category": "専門学校生徒たちからの感想(ウエディング系)",
              "imgURLs": [
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705348/Reviews/1_j9zxw3.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705349/Reviews/2_gr9ozp.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705349/Reviews/3_p1omus.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705349/Reviews/4_cmlael.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705349/Reviews/5_o6uust.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705350/Reviews/6_s7hl5w.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705350/Reviews/7_dqkieb.webp'
              ]
            },
            {
              "category": "専門学校生徒たちからの感想(英語系)",
              "imgURLs": [
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705345/Reviews/1-1_mzfnwo.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705345/Reviews/1-2_tovf6o.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705345/Reviews/1-3_m46fwp.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705347/Reviews/1-4_qebfk5.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705345/Reviews/1-5_sjybft.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705347/Reviews/1-6_iop0qd.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705348/Reviews/1-7_hqm0hl.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705347/Reviews/1-8_mcdueb.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705347/Reviews/1-9_xcjw1n.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705347/Reviews/1-10_xhuz5o.webp',
                'https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687705348/Reviews/1-11_nid6ye.webp'
              ]
            }
          ]
        },
        {
          "title": "地方高校への出張授業",
          "detail": "国際スポーツイベントの為の「おもてなし英会話」の授業を地方の高校に出張し開講しました。",
        },
        {
          "title": "英会話スクール講師",
          "detail": "大手チェーンのスクールで正社員として幼児～大人まで英会話のクラスを持っていました。",
        },
        {
          "title": "検定試験の面接官",
          "detail": "",
        },
      ],
    },
  ]

    return (
        <div className="w-full" id="section3">
            <div className="flex flex-col px-6 py-24 md:px-24">
                <h2 className="text-5xl md:text-4xl font-semibold text-emerald-500">SOがお手伝いできること・してきたこと</h2>
                <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">英語の先生ですが、LGBTQ+の相談も、翻訳も、日本語の先生も、ラジオパーソナリティーもやります。</p>
                {services ? services.map((service, idx) => (
                    <div key={idx}>
                        <ServicesCard 
                            serviceTitle={service.service} 
                            startDate={service.startDate} 
                            capacity={service.capacity} 
                            frequency={service.frequency} 
                            details={service.details} 
                            projectsList={service.projectsList} 
                            lessonVideo={service.lessonVideo} 
                            feedback={service.feedback}
                            otherList={service.otherList}
                            feedbackImgURL={service.feedbackImgURL}
                            adviceReportExample={service.adviceReportExample} />
                    </div>
                )) : "nada"}
            </div>
        </div>
    )
}