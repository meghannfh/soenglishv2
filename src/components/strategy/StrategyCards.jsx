export default function StrategyCards () {
    const strategies = [
        '第二言語習得論をベースにしたアプローチ',
        '独自のIQ(知識)とEQ(心)トレーニング',
        'オリジナルのSTUDY RECORDS™',
        '授業外時間のモチベーション維持の仕組み',
        '密な対話'
    ]
    return (
        <div>
            <h3 className="mt-12 text-2xl font-semibold text-slate-900">SO ENGLISH! 5つのStrategy</h3>
            <ul className="mt-6 flex lg:flex-row justify-between mb-10 w-full">
                {strategies.map((strategy, idx) => (
                    <li key={idx} className="bg-slate-300 w-[17%] h-48 text-center text-lg px-8 font-semibold">{strategy}</li>
                ))}
            </ul>
        </div>
        
    )
}