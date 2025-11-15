import CourseGoal from "./CourseGoal";
import { type CourseGoals as CGoal} from '../App.tsx'

type CourseGoalListProps = {
 goals: CGoal[];
}

const CourseGoalList = ({goals}: CourseGoalListProps) => {



  return (
    <div>
       <ul>
      
      {goals.map((c) => (
        <li key={c.id}>
          <CourseGoal title={c.title}>
            <p>{c.description}</p>
          </CourseGoal>
        </li>
        
      ))}
      </ul>
    </div>
  )
}

export default CourseGoalList