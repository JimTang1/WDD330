import  { makeRequest }  from '../client/authHelpers.js';

let data = '';
await makeRequest('login', 'POST', {
  password: 'user1',
  email: 'user1@email.com'
  }).then(result =>{
    data = result.accessToken;
  });
  console.log(data)
