import request from "supertest";

import faker from 'faker'; 
import {UPDATE_DATA, NEW_DATA_PET, BASE_URL, NEW_DATA} from './API_Supertest/constants.js';
  
export const createNewPet = async()=> {await request(BASE_URL)
  .post('/pet')
  .send(NEW_DATA)
   .set({}, 'application/json')
     .expect('Content-Type', /json/)
     .expect(200)
     .then(response => {
        console.log(response.body)
});
}

export const updateDataPet = async()=> {await request(BASE_URL)
  .put('/pet')
  .send(UPDATE_DATA)
   .set({}, 'application/json')
     .expect('Content-Type', /json/)
     .expect(200)
     .then(response => {
        console.log(response.body)
});
}


export const getPetId = async()=> { await request(BASE_URL)
.get("/pet/214214234234")
.set("Accept", "application/json")
.expect("Content-Type", /json/)
.expect(200)
.then(response => {
  console.log(response.body)
});
}

export const createSecondPet = async()=> { await request(BASE_URL)
.post('/pet')
.send(NEW_DATA_PET)
.expect('Content-Type', /json/)
     .expect(200)
     .then(response => {
        console.log(response.body)
});
}

export const deletePetId = async()=> {await request(BASE_URL)
.delete('/pet/346346456457')
     .then(response => {
        console.log(response.body)
});
}



