"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__dev = exports.mongoDbUrl = exports.adminCode = void 0;
require("dotenv/config");
exports.adminCode = process.env.ADMINCODE;
exports.mongoDbUrl = process.env.MONGODBURL;
exports.__dev = String(process.env.ENV).toLocaleLowerCase().includes("dev");
