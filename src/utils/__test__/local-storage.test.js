import localStorage from "../local-storage";

describe("local storage", () => {
    it("local storage test get and save", () => {
        localStorage().save("auth", "auth data");
        expect(localStorage().get("auth")).toEqual("auth data");
    });
    it("local storage test get, save, remove", () => {
        localStorage().save("auth", "auth data");
        expect(localStorage().get("auth")).toEqual("auth data");
        localStorage().remove("auth", "auth data");
        expect(localStorage().get("auth")).toEqual(null);
    });
});
