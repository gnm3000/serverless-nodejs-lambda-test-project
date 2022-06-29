import {Handler} from 'aws-lambda'

export const sayHello = (name: string) => {
    if(name=="none") return "Hello!"
    return "Hello, " + name;
    
}



export const hello: Handler = (event: any) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: sayHello("User")
            },null,2)
        };
        return new Promise((resolve)=>{
            resolve(response)
        })
    }

