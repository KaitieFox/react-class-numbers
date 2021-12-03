import "./App.css";
import { useEffect, useState } from "react";
import { fetchData, writeNewentry } from "./services/api";

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
    fetchData();
    writeNewentry();
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
  };

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
          type="text"
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
      <div className="InfoContainer">
        <div className="ListContainer">
          <h3>List {date}</h3>
          <div className="InfoListDiv">
            <p>
              Total Students: <span>{count}</span>
            </p>
            <p>
              Students from Last Week: <span></span>
            </p>
            <p>
              Returning Students: <span></span>
            </p>
            <p>
              New Students: <span></span>
            </p>
          </div>
        </div>
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
