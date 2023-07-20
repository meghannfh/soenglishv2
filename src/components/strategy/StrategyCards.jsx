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
            <div className='flex flex-row items-center mt-10 w-full'>
                <img src='https://res.cloudinary.com/dc1aiqs4p/image/upload/v1689782100/Graphic2edit_sdj4gm.webp' className='w-[18%] hidden lg:flex' alt='soichi graphic'/>
                <ul className="w-full flex flex-col gap-y-3 justify-between md:flex-row md:flex-wrap md:gap-x-2 md:h-fit md:justify-center lg:grow">
                    {strategies.map((strategy, idx) => (
                        <li key={idx} className="bg-white/75 p-10 flex items-center justify-center text-center font-semibold md:px-1 md:w-[130px] md:h-[170px] text-base lg:text-md ">{strategy}</li>
                    ))}
                </ul>
            </div>
            
        </div>
        
    )
}