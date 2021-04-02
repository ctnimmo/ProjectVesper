
export const ValueInput = ({value,setValue}) => {

  const handleChange = (e) => {setValue(e.target.value);}

  return (
    <fieldset>
      <br/>
      <legend>Enter a value:</legend>
      <input type="text" onChange={handleChange} />
      <br/><br/>
      <div>Your value:</div>      
      <div>{value}</div>
      <br/>
    </fieldset>
  );
}

export default ValueInput;