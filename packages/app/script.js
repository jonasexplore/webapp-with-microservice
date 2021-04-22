const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const operation = document.querySelector(`input[name="operation"]:checked`);
const submitButton = document.getElementById("submitButton");

const url = "http://localhost:3333";

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const apiGatewayUrl = new URL(`${url}/${operation.value}`);
  let params = {
    firstNumber: firstNumber.value,
    secondNumber: secondNumber.value,
  };

  Object.keys(params).forEach((key) =>
    apiGatewayUrl.searchParams.append(key, params[key])
  );

  // const response = await axios.get(`${apiGatewayUrl}`);
  // console.log(response);

  fetch(apiGatewayUrl, {
    mode: "no-cors",
    method: "get",
  })
    .then(function (response) {
      return response;
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
