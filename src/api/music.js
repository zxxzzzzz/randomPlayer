import request from '../boot/axios';

export function getPersonalFM() {
  const hash = (Math.random() * 10000) % 10000;
  return request.get('/personal_fm', {
    params: {
      hash,
    },
  });
}

export function like(songId) {
  return new Promise((res) => {
    request.get('/like', {
      params: {
        id: songId,
      },
    }).then((data) => {
      res(data);
    });
  });
}
export function getSongUrl(id) {
  return new Promise((res) => {
    request.get('/song/url', {
      params: { id },
    }).then((data) => {
      res(data.data[0].url);
    });
  });
}
export function getFavoriteSongIds(uid) {
  return new Promise((res) => {
    request.get('/likelist', {
      params: { uid },
    }).then((data) => {
      res(data.ids);
    });
  });
}
