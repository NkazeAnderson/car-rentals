import 'dotenv/config'
export const adminCode = process.env.ADMINCODE
export const mongoDbUrl = process.env.MONGODBURL
export const __dev = String(process.env.ENV).toLocaleLowerCase().includes("dev")