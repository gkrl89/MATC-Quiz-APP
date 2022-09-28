import http from '../axios/axios';

const MathgetAll = () => {
  return http.get('/apt-maths');
};
const Mathget = (id: number) => {
  return http.get(`/apt-maths/${id}`);
};
const Mathupdate = (id: number, data: any) => {
  return http.put(`/apt-maths/${id}`, data);
};
const Mathremove = (removeId: number) => {
  return http.delete(`/apt-maths/${removeId}`);
};

const MathService = {
  MathgetAll,
  Mathget,
  Mathupdate,
  Mathremove
};

export default MathService;
