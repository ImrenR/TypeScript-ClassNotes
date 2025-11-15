import CourseGoal from "./components/CourseGoal"
import Header from "./components/Header"
import goalsImg from "./assests/goals.jpg"

const App = () => {
  return (
    <div>
      <Header image={{src: goalsImg, alt: "A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="LEARN REACT+TS">
       
<p>Learn it from the ground up</p>
      </CourseGoal>
    </div>
  )
}

export default App