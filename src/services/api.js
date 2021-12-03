const fetchData = () => {
  fetch("http://127.0.0.1:8000/api/classes/all", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });
};

async function writeNewentry() {
  console.log("write new entry");
}

async function updateEntry() {
  console.log("update entry");
}

export { fetchData, writeNewentry, updateEntry };
