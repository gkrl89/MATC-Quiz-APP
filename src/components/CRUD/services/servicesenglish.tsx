import http from '../axios/axios';

const EnggetAll = () => {
  return http.get('/apt-english');
};
const Engget = (id: number) => {
  return http.get(`/apt-english/${id}`);
};
const Engupdate = (id: number, data: any) => {
  return http.put(`/apt-english/${id}`, data);
};
const Engremove = (removeId: number) => {
  return http.delete(`/apt-english/${removeId}`);
};

const EngService = {
  EnggetAll,
  Engget,
  Engupdate,
  Engremove
};

export default EngService;
