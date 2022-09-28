import http from '../axios/axios';

const JSgetAll = () => {
  return http.get('/jstech');
};
const JSget = (id: number) => {
  return http.get(`/jstech/${id}`);
};
const JSupdate = (id: number, data: any) => {
  return http.put(`/jstech/${id}`, data);
};
const JSremove = (removeId: number) => {
  return http.delete(`/jstech/${removeId}`);
};

const JSService = {
  JSgetAll,
  JSget,
  JSupdate,
  JSremove
};

export default JSService;
