import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

interface CourseGoals {
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

  return (
    <div>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleYourGoal}>Add Your Goal</button>
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
  );
};

export default App;
