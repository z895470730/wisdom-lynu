import request from '../utils/request';
export function query() {
  return request('/api/users');
};
let token;
export const login = (payload) => {
  return fetch('http://211.67.81.7/api/v1/accounts/login/',{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: payload.values.userName,
      password: payload.values.password
    })
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(value => {
      token='JWT' + value.token;
    })
    .then(getUser)
};

export const logOut = () =>{
  token=null;
};

export const getUser = () =>{
  return fetch('http://211.67.81.7/api/v1/people/', {
    method:'GET',
    headers:{
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'authorization' : token,
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(value => value)
};

export const getJobCategory = () =>{
  return fetch('http://211.67.81.7/api/v1/worknote-categories/', {
    method:'GET',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization':token,
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(value => value)
};

export const getCallRecords = () =>{
  return fetch('http://211.67.81.7/api/v1/calls/',{
    method:'GET',
    headers:{
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'authorization' : token,
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(value => value)
};

export const getWorkRecord = () =>{
  return fetch('http://211.67.81.7/api/v1/worknotes/', {
    method:'GET',
    headers:{
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'authorization' :token,
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(value => value)
};

export const getWorkTasks = () =>{
  return fetch('http://211.67.81.7/api/v1/tasks/', {
    method:'GET',
    headers:{
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'authorization' : token,
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(value => {
      return value
    })
};

export const getEvaluation = () =>{
  return fetch('http://211.67.81.7/api/v1/exams/',{
    method:'GET',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization':token,
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(value => value)
};

const parseJSON = (response) => {
  if (response.status !== 204) {
    return response.json()
  }
  return '{}';
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }else{
    console.log('http错误代码为'+response.status)
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};


