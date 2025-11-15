import CourseGoal from "./CourseGoal";


type CourseGoalListProps = {
 goals: {
  title: string;
  description: string;
  id: number;
 }[]
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