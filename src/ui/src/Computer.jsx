import Calculator from './Calculator';

export const Computer = ({temperature, setTemperature}) => {
    
  return (
    <div>
      temperature: {temperature}
      <Calculator
        temperature={temperature}
        setTemperature={setTemperature} />
    </div>
  );
}

export default Computer;