const URL = 'https://opentdb.com/api_token.php?command=request';
// retorno da API
// {"response_code":0,"response_message":"Token Generated Successfully!",
// "token":"e40bec2c1a71e539d54f75a62581215702ff8e3579b225ef090aa57d3891ac53"}

const requestAPI = () => (
  fetch(URL).then((resposta) => (
    resposta.json()
      .then((data) => (resposta.ok ? Promise.resolve(data) : Promise.reject(data))))));
export default requestAPI;
