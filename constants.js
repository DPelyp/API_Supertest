import faker from 'faker';

export const RANDOM_NAME = faker.name.findName();

export const UPDATE_DATA = ({id: 214214234234,
    name : "Bobik",
    status : "sold",
  });

export const NEW_DATA_PET = ({id: 346346456457,
    name : "Sharik",
    status : "available"});

export const NEW_DATA = ({id: 214214234234,
  name : RANDOM_NAME,
  status : "sold"});

export const STORE_DATA = {
    "id": 5,
    "petId": faker.datatype.number(),
    "quantity": 2,
    "shipDate": "2022-02-03T17:04:17.777Z",
    "status": "placed",
    "complete": true
  };
    
export const STORE_DATA_SECOND = {
    "id": 3,
    "petId": faker.datatype.number(),
    "quantity": 7,
    "shipDate": "2022-02-03T17:04:17.777Z",
    "status": "placed",
    "complete": true
  };

export const USER_INFO_FIRST = (
    {id : 7,
        username: "DmytroPelyp",
        firstName : "Dmytro",
        lastName : "Pelyp",
        email : "Test123@gmail.com",
        password : "test123",
        phone : "02818319183",
        userStatus : 0
    });

    export const NEW_STORE_DATA = {
        "id": 2,
        "petId": 124124,
        "quantity": 3,
        "shipDate": "2022-02-03T17:04:17.777Z",
        "status": "placed",
        "complete": true
      };

      export const USER_INFO_SECOND = (
        {id : 7,
            username: faker.name.findName(),
            firstName : "Harry",
            lastName : "Poter",
            email : "Test123@gmail.com",
            password : "test123",
            phone : "02818319183",
            userStatus : 0
        });

        export const UPDATE_USER_DATA = (
            {id : 4,
                username: faker.name.findName(),
                firstName : "Vasia",
                lastName : "Pupkin",
                email : "Test123@gmail.com",
                password : "test123",
                phone : "02818319183",
                userStatus : 0
            });

            export const CREATE_USERS_ARRAY_LIST = [
                {
                  id: 4,
                  username: "DmytroApi",
                  firstName: "Dima",
                  lastName: "Pelyp",
                  email: "ok@mail.ru",
                  password: "test123",
                  phone: "01928307412",
                  userStatus: 0,
                },
                {
                  id: 5,
                  username: "DmytroApisecond",
                  firstName: "Dimon",
                  lastName: "Pelyp",
                  email: "test@gmail.com",
                  password: "testapi123",
                  phone: "02378246824",
                  userStatus: 1,
                },
            ];

   export const BASE_URL = 'https://petstore.swagger.io/v2';
