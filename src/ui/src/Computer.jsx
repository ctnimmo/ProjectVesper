import Calculator from './Calculator';

export const Computer = ({value, setValue}) => {
    
  return (
    <div>
      <br/>
      Global value:
      <br/>
      <br/>
      {value}
      <br/><br/>
      <Calculator
        value={value}
        setValue={setValue} />
    </div>
  );
}

export default Computer;