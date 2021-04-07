import * as utils from "@dva/utils";
import { getChannelById } from "@dva/data";

jest.mock("@dva/utils");
const mockedApiCall = (utils.apiCall as unknown) as jest.MockedFunction<
  typeof utils["apiCall"]
>;
mockedApiCall.mockResolvedValue({
  id: "recruiting",
  name: "recruiting",
  description: "The Next Generation Of Recruiting. Find top talents today!",
  teamId: "linkedin",
});

describe("getChannelById() tests", function () {
  test("fetching a single team", async (done) => {
    expect(mockedApiCall.mock.calls.length).toBe(0);
    const pr = getChannelById("14");
    let resolvedVal: unknown;
    pr.then((val) => {
      resolvedVal = val;
    });
    expect(pr).toBeInstanceOf(Promise);
    expect(resolvedVal).toBeUndefined();
    expect(mockedApiCall.mock.calls.length).toBe(1);

    await pr;
    expect(resolvedVal).toMatchObject({
      id: "recruiting",
      name: "recruiting",
      description: "The Next Generation Of Recruiting. Find top talents today!",
      teamId: "linkedin",
    });
    done();
  });
});
