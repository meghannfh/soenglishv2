import StudyMaterial from "../components/strategy/material/StudyMaterial"
import StrategyCards from "../components/strategy/StrategyCards"

export default function StrategySection(){
  return(
    <div id="section5">
      <div className="flex flex-col px-6 py-24 md:px-24">
        <StrategyCards />
        <StudyMaterial/>
      </div>
    </div>
  )
}