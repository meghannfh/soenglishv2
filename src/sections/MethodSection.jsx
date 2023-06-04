import StudyMethodSection from '../components/method/fivesteps/StudyMethodSection';
import StudyMaterialSection from '../components/method/material/StudyMaterialSection';
import ComprehensivePowerSection from '../components/method/comprehensive/ComprehensivePowerSection';
import WhenToStartSpeakingSection from '../components/method/beginSpeaking/WhenToStartSpeakingSection';

export default function MethodSection(){
  return(
    <div id="section3">
      <StudyMethodSection />
      <StudyMaterialSection />
      <ComprehensivePowerSection />
      <WhenToStartSpeakingSection />
    </div>
  )
}