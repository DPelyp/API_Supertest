import request from "supertest";

import {BASE_URL, USER_INFO_FIRST, UPDATE_USER_DATA, CREATE_USERS_ARRAY_LIST} from './API_Supertest/constants.js';

export const createNewUser = async()=> {await request(BASE_URL) 
    .post(`/user`)
     .send(USER_INFO_FIRST)
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .then(response => {
      console.log(response.body)
});
}
createNewUser()



export const getUserByName = async()=> {await request(BASE_URL) 
    .get(`/user/DmytroPelyp`)
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .then(response => {
      console.log(response.body)
});
}

getUserByName()

export const loginUser = async()=> {await request("https://petstore.swagger.io/v2")
    .get("/user/login?username=RendomName&password=1234test")
     .set("Accept", "application/json")
     .expect("Content-Type", /json/)
     .expect(200)
     .then((response) => {
        console.log(response.body);
});
}

export const logOutUser = async()=> {await request("https://petstore.swagger.io/v2")
    .get("/user/logout")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect({ code: 200, type: "unknown", message: "ok" })
    .then((response) => {
       console.log(response.body);
});
}

export const updateUserData = async()=> {await request(BASE_URL)
  .put('/user/DmytroPelyp')
  .send(UPDATE_USER_DATA)
   .set("Accept", 'application/json')
     .expect('Content-Type', /json/)
     .expect(200)
     .then(response => {
        console.log(response.body)
});
}
updateUserData()

export const createUserWithArray = async()=> {await request("https://petstore.swagger.io/v2")
.post("/user/createWithArray")
.send(CREATE_USERS_ARRAY_LIST)
.set("Accept", "application/json")
.expect("Content-Type", /json/)
.expect(200)
.then((response) => {
  console.log("User: POST (Creates list of users with given input array)");
  console.log(response.body);
});
}

export const createUserWithList = async()=> {await request("https://petstore.swagger.io/v2")
.post("/user/createWithList")
.send(CREATE_USERS_ARRAY_LIST)
.set("Accept", "application/json")
.expect("Content-Type", /json/)
.expect(200)
.then((response) => {
  console.log("User: POST (Creates list of users with given input list)");
  console.log(response.body);
});
}

export const deleteUser = async()=> {await request(BASE_URL)
    .delete('/user/DmytroPelyp')
    .then(response => {
        console.log(response.body)
    });
  }
