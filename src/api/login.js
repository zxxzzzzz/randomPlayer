import request from '../boot/axios';

export function login(phone, password) {
  return request.get('/login/cellphone', {
    params: {
      phone,
      password,
    },
  });
}
