import {baseUrl} from "../utils/constant";

// класс для работы с сервером
class API {

  constructor(url) {
    this._url = url;
  }

  // отправление на сервер данных с полей
  postData(data) {
    return fetch(this._url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        is_load: data.is_load,
        start: data.start,
        end: data.end,
        departure_date: data.departure_date,
        fr_id: data.fr_id,
        route_type: data.route_type,
        rod: data.rod,
        common_ch: data.common_ch,
        vidsobst: data.vidsobst,
        distance: data.distance,
        snd_org_id: data.snd_org_id,
        rsv_org_id: data.rsv_org_id,
        snd_roadid: data.snd_roadid,
        rsv_roadid: data.rsv_roadid,
        snd_dp_id: data.snd_dp_id,
        rsv_dp_id: data.rsv_dp_id
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }); 
  }

  // пробный запрос
  getInitial(data) {
    return fetch(this._url, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }
  

}

// экземпляр класса для работы с сервером
// API для получение данных
export const apiData = new API(baseUrl);