import React,{useState} from 'react';
import ReactDOM from 'react-dom';

export const MyForm = ({ addMyLog }) => {
  const [myDesc, setMyDesc] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const handleSubmit = (e) => {
    addMyLog([myDesc, name, date])
    e.preventDefault();
  }
  return (
    <form onSubmit={e => {handleSubmit(e)}}>
      <label>My description:</label>
      <br/>
      <input name='myDesc' type='text' value={myDesc} onChange={e => setMyDesc(e.target.value)} />
      <br/>
      <label>Name:</label>
      <br/>
      <input name='name' type='text' value={name} onChange={e => setName(e.target.value)} />
      <br/>
      <label>Date:</label>
      <br/>
      <input name='date' type='date' value={date} onChange={e => setDate(e.target.value)} />
      <br/>
      <input type='submit' value='Add Log' />
    </form>
  );
}

export const MyChart = (props) => {
  return (
    <table>
      <thead> 
        <tr>
          <th>My description</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead> 
      {props.mys.map(
        (v, i) => {
          return (
            <tr>
              <th>{v[0]}</th>
              <th>{v[1]}</th>
              <th>{v[2]}</th>
            </tr>
          );
        }
      )}
    </table>
  );
}

export const App = (props) => {
  const [myLogs, setMyLogs] = useState([]);
  const addMyLog = (log) => {
    let logs = [...myLogs, log];
    setMyLogs(logs);
  }
  return (
    <section>
      <MyForm addMyLog={addMyLog}/>
      <MyChart mys={myLogs}/>
    </section>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);