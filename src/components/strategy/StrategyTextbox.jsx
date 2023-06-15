import { Fragment } from 'react';
import StudyMaterial from './material/StudyMaterial';

export default function StrategyTextbox({ subtitle, text, img, subcategories, trainingList, embeddedVid, examples }) {
  let renderStudyMaterial = false;

  return (
    <div>
      <h3 className="mt-20 text-2xl font-semibold text-slate-900">{subtitle}</h3>
      {text &&
        text.map((paragraph, index) => {
          if (subtitle === '1. 第二言語習得論をベースにしたアプローチ' && index === 1) {
            return (
              <Fragment key={index}>
                <p className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                  {paragraph}
                </p>
                {img && <img src={img} alt="diagram" className="mt-6" />}
              </Fragment>
            );
          } else if (subtitle === '1. 第二言語習得論をベースにしたアプローチ' && index === 2) {
            // Skip rendering the paragraph at index 3 since the image is already rendered
            return null;
          } else {
            return (
              <p
                className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900"
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
                  className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900"
                  key={index}
                >
                  {paragraph}
                </p>
              );
            })}
          {trainingList.map((item, index) => (
            <Fragment key={index}>
              <h4 className="my-10 text-xl font-semibold text-slate-900">{item.listTitle}</h4>
              <ul className="w-full">
                {item.list.map((listItem, listItemIndex) => (
                  <li className="text-left block pt-4" key={listItemIndex}>+ {listItem}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </Fragment>
      )}
    {subtitle === '3. オリジナルのSTUDY RECORDS™' && (
        <Fragment>
            <div className='w-full lg:h-[450px] mt-10'>
                {embeddedVid} {/* Render the embeddedVid directly under the subtitle */}
            </div>
            {text && text.map((paragraph, index) => (
                <p
                className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900"
                key={index}
                >
                    {paragraph}
                </p>
            ))}
            {examples && examples.map((example, index) => (
                <Fragment key={index}>
                    <h4 className="mb-10 mt-24 text-xl font-semibold text-slate-900">{example.title}</h4>
                    <div className='w-full lg:h-[450px] mt-10'>
                        {example.embeddedVid} {/* Render the embeddedVid for each example */}
                    </div>
                    {example.text.map((paragraph, idx) => (
                        <p
                        className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900"
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
                    className="mt-6 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900"
                    key={idx}
                  >
                    {text}
                  </p>
                ))}
              {renderStudyMaterial && <StudyMaterial />}
            </div>
          );
        })}
    </div>
  );
}