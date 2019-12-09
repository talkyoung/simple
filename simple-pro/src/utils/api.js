import service from './request'

export const hello = () => {
  return service({
    url: '/hello',
    method: 'get'
  })
};

export const login = data => {
  return service({
    url: '/login',
    method: 'post',
    data: data
  })
};
