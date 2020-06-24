import axios from "axios";
import User from "../User";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Loading Context", () => {
  it("New User by User.create", () => {
    const testUserObj = {
      username: "test_user",
      id: 0,
      firstName: "test",
      lastName: "user",
    };
    mockedAxios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: testUserObj })
    );

    const user = User.create({
      username: "test_user",
      password: "test_password",
      firstName: "test",
      lastName: "user",
    });
    expect(user).toMatchSnapshot();

    expect;

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "http://127.0.0.1:5000/api/users",
      {
        firstName: testUserObj.firstName,
        lastName: testUserObj.lastName,
      },
      {
        auth: {
          username: "test_user",
          password: "test_password",
        },
      }
    );
  });

  it("New User by User.create", () => {
    const testUserObj = {
      username: "test_user",
      id: 0,
      firstName: "test",
      lastName: "user",
    };

    const user = new User();
    user.init(testUserObj);

    expect(user).toMatchSnapshot();

    expect(user.get("username")).toBe(testUserObj.username);
    expect(user.get("id")).toBe(testUserObj.id);
    expect(user.get("firstName")).toBe(testUserObj.firstName);
    expect(user.get("lastName")).toBe(testUserObj.lastName);
  });

  it("User get returns expected values", () => {
    const testUserObj = {
      username: "test_user",
      id: 0,
      firstName: "test",
      lastName: "user",
    };

    const user = new User();
    user.init(testUserObj);

    expect(user).toMatchSnapshot();

    expect(user.get("username")).toBe(testUserObj.username);
    expect(user.get("id")).toBe(testUserObj.id);
    expect(user.get("firstName")).toBe(testUserObj.firstName);
    expect(user.get("lastName")).toBe(testUserObj.lastName);
  });

  it("User get returns error when user data is undefined", () => {
    const testUserObj = {
      username: "test_user",
      id: 0,
      firstName: "test",
      lastName: "user",
    };

    global.console = {
      log: jest.fn(), // console.log are ignored in tests

      // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
      error: jest.fn(),
      warn: jest.fn(),
      info: jest.fn(),
      debug: jest.fn(),
      ...console,
    };

    const user = new User();

    expect(user).toMatchSnapshot();

    expect(() => user.get("username")).toThrowError("User is undefined");
  });
});
