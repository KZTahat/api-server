"use strict";

const supertest = require("supertest");
const { app } = require("../src/server.js");
const requset = supertest(app);

describe("server testing", () => {
  test("All Good message check", async () => {
    //arrange
    let param = "/";
    let status = 200;
    let message = "All Good";
    //act
    const response = await requset.get(param);
    //assert
    expect(response.status).toEqual(status);
    expect(response.text).toEqual(message);
  });
  test("not found error check", async () => {
    //arrange
    let param = "/notfound";
    let status = 404;
    //act
    const response = await requset.get(param);
    //assert
    expect(response.status).toEqual(status);
  });
  test("internal server error check", async () => {
    //arrange
    let param = "/bad";
    let status = 500;
    //act
    const response = await requset.get(param);
    //assert
    expect(response.status).toEqual(status);
  });
});

describe("Food Routes check", () => {
  test("it should return 200 status at GET /food", async () => {
    //arrange
    let param = "/food";
    let status = 200;
    //act
    const response = await requset.get(param);
    //assert
    expect(response.status).toEqual(status);
  });
});

describe("Order Routes check", () => {
  test("it should return 200 status at GET /order", async () => {
    //arrange
    let param = "/order";
    let status = 200;
    //act
    const response = await requset.get(param);
    //assert
    expect(response.status).toEqual(status);
  });
//   test("it should return 204 status at DELETE /food", async () => {
//     //arrange
//     let param = "/order/4";
//     let status = 204;
//     //act
//     const response = await requset.delete(param);
//     //assert
//     expect(response.status).toEqual(status);
//   });
});
