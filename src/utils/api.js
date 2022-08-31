class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  // получение данных о пользователе
  getUserInfoApi() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // публичный метод для получения массива карточек с сервера
  getInitialCardsApi() {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // отправка обновлённых данных о пользователе на сервер
  patchUserInfo({ name, about }) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  //  отправка ссылки на новый аватар
  patchUserAvatar({ avatar: link }) {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse);
  }

  // запрос на удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // добавление и удаление лайков
  toggleLikes(cardId, isLikes) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: isLikes ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // метод для отправки данных карты
  postCard(item) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: item.title,
        link: item.link,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-45/",
  headers: {
    authorization: "a5c762bc-210a-4e68-9fc7-978e4674d050",
    "Content-Type": "application/json",
  },
});

export default api;
