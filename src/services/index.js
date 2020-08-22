const tokenAPIurl = 'https://opentdb.com/api_token.php?command=request';
const avatarAPIurl = 'https://www.gravatar.com/avatar/';
const questionsAPIurl = 'https://opentdb.com/api.php?amount=5&token=';

export const requestAPI = () => (
  fetch(tokenAPIurl).then((resposta) => (
    resposta.json()
      .then((data) => (resposta.ok ? Promise.resolve(data) : Promise.reject(data)))
  ))
);

export const requestGravatar = (hash) => (
  fetch(`${avatarAPIurl}${hash}`)
    .then((response) => (
      response.json()
        .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
    ))
);

export const requestQuestions = (token) => (
  fetch(`${questionsAPIurl}${token}`)
    .then((response) => (
      response.json()
        .then(
          (data) => (response.ok ? Promise.resolve(data.results) : Promise.reject(data.results)),
        )
    ))
);
