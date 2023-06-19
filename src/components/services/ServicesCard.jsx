import Reviews from "../kansou/Reviews";

export default function ServicesCard({ serviceTitle, startDate, capacity, frequency, details, projectsList, lessonVideo, feedback }) {
    const hasLessonVideo = lessonVideo && lessonVideo !== '';
    const hasProjectsList = projectsList && projectsList.length > 0;
  
    return (
      <div>
        <h3 className="mt-20 text-2xl font-semibold text-slate-900">{serviceTitle}</h3>
        <div className="flex flex-row gap-3 mt-6 text-2xl md:text-xl">
          <h4 className="mt-3">{startDate !== '' && startDate + ','}</h4>
          <h4 className="mt-3">{capacity !== '' && capacity}</h4>
        </div>
        <h4 className="mt-3 text-2xl md:text-xl leading-relaxed md:leading-loose">{frequency && frequency}</h4>
        <div className="mt-10">
          {details.length > 0 &&
            details.map((detail, idx) => (
              <p key={idx} className="mt-5 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">
                {detail}
              </p>
            ))}
          {hasLessonVideo && (
            <div className="w-full lg:h-[450px] mt-10">
              {lessonVideo} {/* Assuming the lessonVideo prop is a valid JSX element */}
            </div>
          )}
        </div>
        {hasProjectsList && (
          <ul className="mt-10 w-full">
            {projectsList.map((project, idx) => (
              <li key={idx} className="text-left block mt-5 text-2xl leading-relaxed md:leading-loose md:text-lg font-medium text-slate-900">+ {project}</li>
            ))}
          </ul>
        )}
        <div className={ feedback?.length > 0 ? 'block' : 'hidden'}>
          <Reviews feedback={feedback} />
        </div>
      </div>
    );
  }
  
  
  
  
  
  