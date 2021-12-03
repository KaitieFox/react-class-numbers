import { useEffect } from "react";

const InfoElement = ({ dateOfClass }) => {
  //likely I'll want to make objects and then do "object contains"

  return (
    <div className="ListContainer">
      <h3>List {dateOfClass}</h3>
      <div className="InfoListDiv">
        <p>
          Total Students: <span></span>
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
  );
};

export default InfoElement;
