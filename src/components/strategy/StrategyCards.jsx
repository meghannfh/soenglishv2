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
            <h3 className="mt-12 text-3xl font-semibold text-slate-900">SO ENGLISH! 5つのStrategy</h3>
            <ul className="mt-6 mb-10 flex gap-4 flex-col justify-between w-full md:flex-row md:flex-wrap md:gap-10 md:h-fit md:justify-center lg:justify-between">
                {strategies.map((strategy, idx) => (
                    <li key={idx} className="bg-white/75 p-10 flex items-center justify-center text-center text-xl font-semibold md:px-8 md:w-[25%] md:h-52 md:text-base lg:w-[15%] lg:text-lg lg:h-60">{strategy}</li>
                ))}
            </ul>
        </div>
        
    )
}