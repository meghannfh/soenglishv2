import { Fragment } from 'react';
import StudyMaterial from './material/StudyMaterial';

export default function StrategyTextbox({ subtitle, text, img, subcategories, trainingList, embeddedVid, examples, contentList }) {
  let renderStudyMaterial = false;

  return (
    <div>
      <h3 className="text-slate-900">{subtitle}</h3>
      {text && subtitle === '1. 第二言語習得論をベースにしたアプローチ' && 
        text.map((paragraph, index) => {
          if (index < 3) {
          // Render the first 3 paragraphs
            return (
              <p className="indent" key={index}>
                {paragraph}
              </p>
            );
          } else if (index === 3) {
          // Render the image after the first 3 paragraphs
            return (
              <Fragment key={index}>
                {img && <div className="my-10 w-full flex justify-center">
                    <img src={img} alt="diagram" className="w-full lg:w-[70%]" />
                </div>}
                <p key={index + 1}>
                  {paragraph}
                </p>
              </Fragment>
            );
          } else {
            return null; // Skip rendering paragraphs at other indices
          }
      })}
      {subtitle === '2. 独自のIQ(知識)とEQ(心)トレーニング' && (
        <Fragment>
          {text &&
            text.map((paragraph, index) => {
              return (
                <p key={index}>
                  {paragraph}
                </p>
              );
            })}
          {trainingList.map((item, index) => (
            <Fragment key={index}>
              <h4>{item.listTitle}</h4>
              <ul className="w-full pl-5 list-disc flex flex-col gap-2">
                {item.list.map((listItem, listItemIndex) => (
                  <li className="text-lg md:text-lg font-medium text-slate-900" key={listItemIndex}>{listItem}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </Fragment>
      )}
    {subtitle === '3. オリジナルのSTUDY RECORDS™' && (
        <Fragment>
          <div className="w-full flex justify-center">
            <div className="w-full h-auto md:h-[400px] md:w-[600px] mt-6">
              {embeddedVid} {/* Render the embeddedVid directly under the subtitle */}
            </div>
          </div>
            {text && text.map((paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            ))}
            {examples && examples.map((example, index) => (
                <Fragment key={index}>
                    <h4>{example.title}</h4>
                    <div className="w-full flex justify-center">
                      <div className="w-full h-auto md:h-[400px] md:w-[600px] mt-6">
                        {example.embeddedVid} {/* Render the embeddedVid for each example */}
                      </div>
                    </div>
                   
                    {example.text.map((paragraph, idx) => (
                        <p key={idx}>
                          {paragraph}
                        </p>
                    ))}
                </Fragment>
            ))}
        </Fragment>
    )}
    {(subtitle === '4. 授業外時間のモチベーション維持の仕組み' || subtitle === '5. 密な対話') && text.map((paragraph, index) => {
      return (<p key={index}>
      {paragraph}
    </p>)
    })}
    {subcategories &&
        subcategories.map((subcategory, idx) => {
          if (subcategory.subcatTitle === 'データベース') {
            renderStudyMaterial = true;
          }

          return (
            <div key={idx}>
              <h4>
                {subcategory.subcatTitle}
              </h4>
              {subcategory.text &&
                subcategory.text.map((text, idx) => (
                  <p key={idx}>
                    {text}
                  </p>
                ))}
              {renderStudyMaterial && <StudyMaterial />}
            </div>
          );
        })}
        {contentList && contentList.map((list, idx) => (
          <div className='mt-10' key={idx}>
            <h4>{list.listTitle}</h4>
            <ul className='pl-5'>
              {list.contentList.map((item, idx) => (
                <li key={idx} className='mt-3 text-lg list-disc'>{item}</li>
              ))}
            </ul>
            {list.listTitle === '一人用' && <div className='flex flex-col md:grid grid-parent-strategy justify-center items-center mt-10'>
              {list.contentMedia.map((mediumItem, idx) => {
                const indexNames = {
                  0: 'strategy_one',
                  1: 'strategy_two',
                  2: 'strategy_three',
                  3: 'strategy_four',
                  4: 'strategy_five'
                }
                
                return (  
                  <div key={idx} className='relative flex justify-center gap-4' id={indexNames[idx]}>
                    <h5 className='text-sm md:text-md absolute top-2 rounded-md bg-slate-800/90 text-white p-2'>{mediumItem.title}</h5>
                    <img src={mediumItem.imgUrl} alt={mediumItem.imgAlt} />
                  </div>)})}    
            </div>}
            {list.listTitle === '複数人用' && <div className='flex flex-col gap-4 px-4 lg:px-0 items-center w-full lg:flex-row mt-10'>
            {list.contentMedia.map((mediumItem, idx) => (
                <div key={idx} className='relative flex content-center md:w-full md:h-full'>
                  <h5 className='text-sm md:text-md absolute top-2 right-2 md:right-20 rounded-md bg-slate-800/90 text-white p-2'>{mediumItem.title}</h5>
                  <div className='h-full w-full flex items-center justify-center'>
                    {idx === 1 ? (
                      <img src={mediumItem.imgUrl} alt={mediumItem.imgAlt} className='h-full md:w-2/3 lg:h-full'/>
                    ) : <img src={mediumItem.imgUrl} alt={mediumItem.imgAlt} className='md:w-2/3 lg:w-full'/> }
                  </div>
                </div>
              ))} 
            </div>}
          </div>
        ))}
    </div>
  );
}