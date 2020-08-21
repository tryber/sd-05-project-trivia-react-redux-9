const tokenAPIurl = 'https://opentdb.com/api_token.php?command=request';
const avatarAPIurl = 'https://www.gravatar.com/avatar/';

export const requestAPI = () => (
  fetch(tokenAPIurl).then((resposta) => (
    resposta.json()
      .then((data) => (resposta.ok ? Promise.resolve(data) : Promise.reject(data))))));

export const requestGravatar = (hash) => (
  fetch(`${avatarAPIurl}${hash}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
