class MainApi {
    constructor(config) {
      this._url = config.url;
      this.headers = config.headers;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }
  
    //получение информации о пользователе с сервера
    getProfileInfo(token) {
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: {
          ...this.headers,
          Authorization: `Bearer ${token}`,
        },
      }).then(this._checkResponse);
    }
  
    //передача новой информации о пользователе на сервер
    putProfileInfo(data, token) {
      return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          ...this.headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      }).then(this._checkResponse);
    }
  }
  
  //запись всего класса Api в переменную и её импорт
  const mainApi = new MainApi({
    url: "http://localhost:3005",
    headers: {
      "content-type": "application/json",
    },
  });
  
  export default mainApi;