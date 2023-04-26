import {sum} from "./sum";

test('sum shoud to be correct', ()=>{

    const a = 1;
    const b = 2;

    const result = sum(a, b)

    expect(result).toBe(3)
})