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

const sendData = (data) => {
  console.log(JSON.stringify(data));
  fetch("http://127.0.0.1:8000/api/handleSubmit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
};

const exportToCsv = () => {
  console.log("Export");
  fetch("http://127.0.0.1:8000/api/export", {
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

export { fetchData, sendData, exportToCsv };
