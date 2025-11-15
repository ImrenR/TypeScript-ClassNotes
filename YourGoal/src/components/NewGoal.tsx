
const NewGoal = () => {



  const handleSubmit = ()=> {
    
  }
  return (
   <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="goal">Your Goal</label>
      <input type="text" id="goal"/>
    </p>
    <p>
     <label htmlFor="summary">Short summary</label>
      <input type="text" id="summary"/>
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