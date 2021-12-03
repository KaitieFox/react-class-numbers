import { useState } from "react";

const NameInput = () => {
  const [date, setDate] = useState();
  const [list, setList] = useState();
  //todo: make separate items in object based off of new line
  // step between: can compare several without storing in storage. make list onsubmit? use useeffect?
  // store object in storage
  // compare objects from storage
  const ListObject = {};
  function formatList(list) {
    return list.split("\n");
  }
  const onSubmit = () => {
    console.log("Submit was pressed");
    console.log("Data " + date);
    console.log("List " + list);
    ListObject.date = date;
    ListObject.students = formatList(list);
    console.log(ListObject);
    setDate("");
    setList("");
  };

  const handleTextAreaChange = (event) => {
    setList(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
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
  );
};

export default NameInput;
