import { useRef, type FormEvent } from "react";

const NewGoal = () => {

 const goal = useRef(null);
 const summary = useRef(null);


  const handleSubmit = (e : FormEvent<HTMLFormElement>)=> {
    e.preventDefault();

  }
  return (
   <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="goal">Your Goal</label>
      <input type="text" id="goal" ref={goal}/>
    </p>
    <p>
     <label htmlFor="summary">Short summary</label>
      <input type="text" id="summary" ref={summary}/>
    </p>
    <p>
      <button>
        Add goal
      </button>
    </p>
   </form>
  )
}

export default NewGoal