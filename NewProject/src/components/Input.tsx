type InputProps = {
  label: string;
  text: string;
}

const Input = ({props}: InputProps) => {
  return (
  <p>
    <label htmlFor="">TEXT</label>
    <input type="text" />
  </p>
  )
}

export default Input