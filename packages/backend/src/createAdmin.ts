import { backendUrl } from 'common';
import { userT } from 'common/src/zodSchemas';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user:Partial<{name:string, email:string, code:string}> = {}

rl.question(`What's your full name? `, name => {
    user.name = name
  console.log(`Name: ${name}`);
  rl.question(`What's your email? `, email => {
    user.email = email
    console.log(`email: ${email}`);
    rl.question(`What's the secret code? `, code => {
        user.code = code
        fetch(`${backendUrl}/createAdmin`, {method: "POST", headers:{"Content-Type":"application/json", "Accept":"application/json"}, body:JSON.stringify(user)}).then(res=>{
            if (res.status === 200) {
                console.log("Account created successfully");
                rl.close();
            }
            else {
                console.log("Failed to create account");
                rl.close();
            }
        })
        
    });
});

});
