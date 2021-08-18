"use strict";

const loggerMiddelware = require("../src/middelwares/logger.js");

describe("logger middelware", () => {
  //arrange
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on next method

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  test("it should log to the console", () => {
    //act
    loggerMiddelware(req, res, next);
    //assert
    expect(consoleSpy).toHaveBeenCalled();
  });
  test("it should call the next methode", () => {
    //act
    loggerMiddelware(req, res, next);
    //assert
    expect(next).toHaveBeenCalledWith();
    //we add 'With' to make sure next has been called without any arguments
  });
});
