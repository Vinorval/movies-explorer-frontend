class MainApi {
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
  
    //получение информации о пользователе с сервера
    getProfileInfo(token) {
      return this._createRequest(`${this._url}/users/me`, "GET", { ...this.headers, Authorization: `Bearer ${token}` }).then(this._checkResponse);
    }
  
    //передача новой информации о пользователе на сервер
    putProfileInfo(data, token) {
      return this._createRequest(
        `${this._url}/users/me`,
        "PATCH",
        { ...this.headers, Authorization: `Bearer ${token}` },
        JSON.stringify({ name: data.name, email: data.email,})
      ).then(this._checkResponse);
    }

    //получение карточек с сервера
  getAllCard(token) {
    return this._createRequest(
      `${this._url}/movies`,
      "GET",
      { ...this.headers, Authorization: `Bearer ${token}` },
    ).then(this._checkResponse);
  }

  //добавление карточки на сервер
  addCard(data, token) {
    return this._createRequest(
      `${this._url}/movies`,
      "POST",
      { ...this.headers, Authorization: `Bearer ${token}` },
      JSON.stringify({ 
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    ).then(this._checkResponse);
  }

  //удаление карточки с сервера
  removeCard(cardId, token) {
    return this._createRequest(
      `${this._url}/movies/${cardId}`,
      "DELETE",
      { ...this.headers, Authorization: `Bearer ${token}` },
    ).then(this._checkResponse);
  }
  }
  
  //запись всего класса Api в переменную и её импорт
  const mainApi = new MainApi({
    url: "https://api.vinorval.movies.nomoredomains.icu",
    headers: {
      "content-type": "application/json",
    },
  });
  
  export default mainApi;