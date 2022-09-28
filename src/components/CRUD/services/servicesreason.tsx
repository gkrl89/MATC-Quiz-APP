import http from '../axios/axios';

const ReasgetAll = () => {
  return http.get('/apt-reason');
};
const Reasget = (id: number) => {
  return http.get(`/apt-reason/${id}`);
};
const Reasupdate = (id: number, data: any) => {
  return http.put(`/apt-reason/${id}`, data);
};
const Reasremove = (removeId: number) => {
  return http.delete(`/apt-reason/${removeId}`);
};

const ReasService = {
  ReasgetAll,
  Reasget,
  Reasupdate,
  Reasremove
};

export default ReasService;
