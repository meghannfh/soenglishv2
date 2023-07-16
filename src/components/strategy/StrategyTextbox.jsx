import { Fragment } from 'react';
import StudyMaterial from './material/StudyMaterial';

export default function StrategyTextbox({ subtitle, text, img, subcategories, trainingList, embeddedVid, examples, contentList }) {
  let renderStudyMaterial = false;

  return (
    <div>
      <h3 className="mt-20 text-2xl font-semibold text-slate-900">{subtitle}</h3>
      {text && subtitle !== '3. オリジナルのSTUDY RECORDS™' &&
        text.map((paragraph, index) => {
          if (index === 1) {
            return (
              <Fragment key={index}>
                <p className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900">
                  {paragraph}
                </p>
                <div className="my-10 w-full flex justify-center">
                  {img && <img src={img} alt="diagram" className="w-full lg:w-[70%]"/>}
                </div>
              </Fragment>
            );
          } else if (index === 2) {
            // Skip rendering the paragraph at index 3 since the image is already rendered
            return null;
          } else {
            return (
              <p
                className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900"
                key={index}
              >
                {paragraph}
              </p>
            );
          }
        })}
      {subtitle === '2. 独自のIQ(知識)とEQ(心)トレーニング' && (
        <Fragment>
          {text &&
            text.map((paragraph, index) => {
              return (
                <p
                  className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900"
                  key={index}
                >
                  {paragraph}
                </p>
              );
            })}
          {trainingList.map((item, index) => (
            <Fragment key={index}>
              <h4 className="my-10 text-xl md:text-2xl font-semibold text-slate-900">{item.listTitle}</h4>
              <ul className="w-full pl-5 list-disc flex flex-col">
                {item.list.map((listItem, listItemIndex) => (
                  <li className="mt-5 text-xl md:text-lg font-medium text-slate-900" key={listItemIndex}>{listItem}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </Fragment>
      )}
    {subtitle === '3. オリジナルのSTUDY RECORDS™' && (
        <Fragment>
            <div className='w-full h-[400px] lg:h-[550px] mt-10'>
                {embeddedVid} {/* Render the embeddedVid directly under the subtitle */}
            </div>
            {text && text.map((paragraph, index) => (
                <p
                className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900"
                key={index}
                >
                    {paragraph}
                </p>
            ))}
            {examples && examples.map((example, index) => (
                <Fragment key={index}>
                    <h4 className="mb-10 mt-24 text-xl md:text-2xl font-semibold text-slate-900">{example.title}</h4>
                    <div className='w-full h-[400px] lg:h-[550px] mt-10'>
                        {example.embeddedVid} {/* Render the embeddedVid for each example */}
                    </div>
                    {example.text.map((paragraph, idx) => (
                        <p
                        className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900"
                        key={idx}
                        >
                            {paragraph}
                        </p>
                    ))}
                </Fragment>
            ))}
        </Fragment>
    )}
    {subcategories &&
        subcategories.map((subcategory, idx) => {
          if (subcategory.subcatTitle === 'データベース') {
            renderStudyMaterial = true;
          }

          return (
            <div key={idx}>
              <h4 className="mt-10 text-xl font-semibold text-slate-900">
                {subcategory.subcatTitle}
              </h4>
              {subcategory.text &&
                subcategory.text.map((text, idx) => (
                  <p
                    className="mt-3 indent-5 leading-relaxed md:leading-loose text-lg font-medium text-slate-900"
                    key={idx}
                  >
                    {text}
                  </p>
                ))}
              {renderStudyMaterial && <StudyMaterial />}
            </div>
          );
        })}
        {contentList && contentList.map((list, idx) => (
          <div className='mt-10' key={idx}>
            <h3 className='text-xl font-semibold'>{list.listTitle}</h3>
            <ul className='pl-5'>
              {list.contentList.map((item, idx) => (
                <li key={idx} className='mt-3 text-lg list-disc'>{item}</li>
              ))}
            </ul>
            {list.listTitle === '一人用' && <div className='grid-parent-strategy w-full mt-10 gap-4'>
              {list.contentMedia.map((mediumItem, idx) => {
                const indexNames = {
                  0: 'strategy_one',
                  1: 'strategy_two',
                  2: 'strategy_three',
                  3: 'strategy_four',
                  4: 'strategy_five'
                }
                
                return (  
                  <div key={idx} className='flex flex-col relative rounded-md overflow-hidden' id={indexNames[idx]}>
                    <h5 className='text-sm md:text-md absolute right-0 md:top-1 md:right-1 rounded-md bg-slate-800/90 text-white p-2'>{mediumItem.title}</h5>
                    <img src={mediumItem.imgUrl} alt={mediumItem.imgAlt} />
                  </div>)})}    
            </div>}
            {list.listTitle === '複数人用' && <div className='flex flex-col gap-3 items-center w-full lg:flex-row mt-10 lg:h-96'>
            {list.contentMedia.map((mediumItem, idx) => (
                <div key={idx} className='relative flex content-center w-2/3 md:w-full md:h-full'>
                  <h5 className='text-sm md:text-md absolute top-2 right-2 rounded-md bg-slate-800/90 text-white p-2'>{mediumItem.title}</h5>
                  <div className='h-full'>
                    {idx === 1 ? (
                      <img src={mediumItem.imgUrl} alt={mediumItem.imgAlt} className='h-full lg:h-full'/>
                    ) : <img src={mediumItem.imgUrl} alt={mediumItem.imgAlt} className='lg:w-full'/> }
                  </div>
                </div>
              ))} 
            </div>}
          </div>
        ))}
    </div>
  );
}