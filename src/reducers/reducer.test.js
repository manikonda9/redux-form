import reducer from "./reducer";

describe("Name Reducer", () => {
    it('should return the intial state', () => {
        expect(reducer(undefined, {})).toEqual({
            name: "Hello World"
        })
    });

    it('should return the state after some action', () => {
        expect(reducer(
            { name: "Hello World" },
            { type: "ADD", name: "Hi MMK, Welcome to Hello World" }))
            .toEqual({
                name: "Hi MMK, Welcome to Hello World"
            })
    })
})