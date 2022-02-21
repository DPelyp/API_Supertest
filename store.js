import request from "supertest";

import { BASE_URL, NEW_STORE_DATA, STORE_DATA, STORE_DATA_SECOND} from "./API_Supertest/constants.js";

export const createNewOrder = async()=> {await request(BASE_URL)
    .post('/store/order')
    .send(STORE_DATA)
     .set({}, 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then(response => {
          console.log(response.body)
  });
  }

export const getOrderById = async()=> {await request(BASE_URL)
    .get("/store/order/5")
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .then(response => {
        console.log(response.body)
    });
}


export const createSecondOrder = async()=> {await request(BASE_URL)
    .post('/store/order')
    .send(STORE_DATA_SECOND)
     .set({}, 'application/json')
       .expect('Content-Type', /json/)
       .expect(200)
       .then(response => {
          console.log(response.body)
  });
  }

export const deleteOrderById = async()=> {await request(BASE_URL)
    .delete('/store/order/5')
         .then(response => {
            console.log(response.body)
    });
    }


