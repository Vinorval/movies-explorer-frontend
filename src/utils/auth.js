export const BASE_URL = "https://api.vinorval.movies.nomoredomains.icu/";

class Auth {
  constructor(config) {
    this._url = config.url;
    this.headers = config.headers;
  }

  _createRequest(url, method, headers, body) {
    return fetch(url, {
      method: method,
      headers: headers,
      body: body
    })
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  //запрос на регистрацию пользователя
  register(name, email, password) {
    return this._createRequest(`${this._url}/signup`, "POST", this.headers, JSON.stringify({ name, email, password })).then(this._checkResponse);
  }

  //запрос на вход пользователя
  login(email, password) {
    return this._createRequest(`${this._url}/signin`, "POST", this.headers, JSON.stringify({ email, password })).then(this._checkResponse);
  }

  //запрос на проверку токена пользователя
  checkToken(token) {
    return this._createRequest(`${this._url}/users/me`, "GET", { ...this.headers, Authorization: `Bearer ${token}` }).then(this._checkResponse);
  }
}

const auth = new Auth({
  url: "https://api.vinorval.movies.nomoredomains.icu",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default auth;