
export const TemperatureInput = ({temperature,setTemperature}) => {

  const handleChange = (e) => {setTemperature(e.target.value);}

  return (
    <fieldset>
      <legend>Enter temp:</legend>
      <input type="text" onChange={handleChange} />
      <div>{temperature}</div>
    </fieldset>
  );
}

export default TemperatureInput;