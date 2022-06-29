import {sayHello} from '../handler'


describe("handler function tests",()=>{

    test("test a simple event",async () => {
        expect(sayHello("German")).toBe("Hello, German");
        expect(sayHello("none")).toBe("Hello!");
        
    })

})

