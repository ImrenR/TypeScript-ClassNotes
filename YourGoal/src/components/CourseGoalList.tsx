import CourseGoal from "./CourseGoal";
import { type CourseGoals as CGoal} from '../App.tsx'
import InfoBox from "./InfoBox.tsx";
import type { ReactNode } from "react";

type CourseGoalListProps = {
 goals: CGoal[];
 onDeleteGoal : (id:number)=> void;
}

const CourseGoalList = ({goals, onDeleteGoal}: CourseGoalListProps) => {

  if(goals.length===0){
    return <InfoBox mode="hint">You have no course goals yet.Start add some!</InfoBox>
  }

let warningBox : ReactNode;

if(goals.length >= 4){
  warningBox = (<InfoBox mode="warning">
    You are collecting a lot of goals. Dont put too much on your plate!
  </InfoBox>
  );
}
  return (
    <>
    {warningBox}
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
    </>
  )
}

export default CourseGoalList