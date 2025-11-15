import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoals ={
  title: string;
  description: string;
  id: number;
}

const App = () => {
    const [goals, setGoals] = useState<CourseGoals[]>([]);


  const handleYourGoal = () => {
    setGoals((a) => {
      const newGoal: CourseGoals = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };
      return [...a, newGoal];
    });
  };

const deleteGoal = (id:number)=> {
  const deleteOne = (a: CourseGoals[]) => {
    return a.filter((goals)=> goals.id !== id);
  };
setGoals(deleteOne)
}
 

  return (
    <div>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleYourGoal}>Add Your Goal</button>
     <CourseGoalList goals={goals} onDeleteGoal={deleteGoal}/>

    </div>
  );
};

export default App;
