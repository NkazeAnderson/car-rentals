"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("common");
const node_readline_1 = __importDefault(require("node:readline"));
const rl = node_readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const user = {};
rl.question(`What's your full name? `, name => {
    user.name = name;
    console.log(`Name: ${name}`);
    rl.question(`What's your email? `, email => {
        user.email = email;
        console.log(`email: ${email}`);
        rl.question(`What's the secret code? `, code => {
            user.code = code;
            fetch(`${common_1.backendUrl}/createAdmin`, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(user) }).then(res => {
                if (res.status === 200) {
                    console.log("Account created successfully");
                    rl.close();
                }
                else {
                    console.log("Failed to create account");
                    rl.close();
                }
            });
        });
    });
});
