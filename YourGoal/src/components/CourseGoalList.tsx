import CourseGoal from "./CourseGoal";
import { type CourseGoals as CGoal} from '../App.tsx'
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
 goals: CGoal[];
 onDeleteGoal : (id:number)=> void;
}

const CourseGoalList = ({goals, onDeleteGoal}: CourseGoalListProps) => {

  if(goals.length===0){
    return <InfoBox mode="hint"  >You have no course goals yet.</InfoBox>
  }


  return (
    <div>
       <ul>
      
      {goals.map((c) => (
        <li key={c.id}>
          <CourseGoal id={c.id}title={c.title} onDelete={onDeleteGoal}>
            <p>{c.description}</p>
          </CourseGoal>
        </li>
        
      ))}
      </ul>
    </div>
  )
}

export default CourseGoalList