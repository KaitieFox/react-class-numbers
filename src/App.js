import "./App.css";
import { useEffect, useState } from "react";
import { fetchData, sendData, exportToCsv } from "./services/api";

function App() {
  const [date, setDate] = useState();
  const [list, setList] = useState();
  const [count, setCount] = useState();
  const [data, setData] = useState([]);
  //todo
  // step between: can compare several without storing in storage.
  // store object in data.json
  // compare objects from data.json

  useEffect(() => {
    // fetchData();
  }, []);

  //other things
  // pull down previous class object
  // maybe update a running tab of unique students
  // (2) comparisons:
  // 1- were they here last week?
  // 2- were they ever here?
  // if neither, then they are "new"

  //also, use the useEffect hook. I think it'll be cleaner

  const handleTextAreaChange = (event) => {
    setList(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const onSubmit = () => {
    console.log("onSubmit");
    sendData({ class: { date }, students: formatList(list) });
    setList("");
  };

  function formatList(list) {
    if (list) {
      return list.split("\n");
    }
    return;
  }

  return (
    <div className="App">
      <h3>
        Okay so you will put in the names of people with commas between people
        and it will put together a list of them to compare.
      </h3>
      <div className="ListContainer">
        <label htmlFor="Date">Date of Class</label>
        <input
          style={{ marginBottom: 16 }}
          type="date"
          name="Date"
          onChange={handleDateChange}
        />
        <label htmlFor="StudentNumber">Class List</label>
        <textarea
          rows={16}
          onChange={handleTextAreaChange}
          value={list}
          name="StudentNumber"
        ></textarea>
        <button type="submit" onClick={onSubmit}>
          Submit this List
        </button>
      </div>
      <div>
        <button onClick={exportToCsv}>EXPORT TO CSV</button>
      </div>
    </div>
  );
}

export default App;

// const ListObject = {};

// const onSubmit = () => {
//   const ListObject = makeListData();
//   console.log(ListObject);
// };

// function makeListData() {
//   ListObject.date = date;
//   ListObject.students = formatList(list);
//   setCount(ListObject.students.length);
//   ListObject.totalStudents = ListObject.students.length;
//   return ListObject;
// }

// function formatList(list) {
//   if (list) {
//     return list.split("\n");
//   }
//   return;
// }
