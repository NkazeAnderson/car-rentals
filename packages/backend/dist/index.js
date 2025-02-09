"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const formData = __importStar(require("express-form-data"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const models_1 = __importDefault(require("./models/models"));
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb://localhost:27017/CarRentals").then(() => {
    console.log("Successfully connected to database");
}).catch(e => console.error(e));
const port = process.env.PORT || 3000;
const logger = (0, morgan_1.default)("tiny");
const jsonParser = body_parser_1.default.json();
const formDataParser = formData.parse({ uploadDir: __dirname + "/../images" });
const urlEncoded = body_parser_1.default.urlencoded({ extended: true });
app.use((0, cors_1.default)({ origin: "http://localhost:5173", credentials: true }));
app.use((0, cookie_parser_1.default)('1234'));
app.use(logger, jsonParser, urlEncoded);
app.use(formDataParser);
app.use("/images", express_1.default.static(__dirname + '/../images'));
app.use((req, res, next) => {
    if ("files" in req) {
        const files = req.files;
        for (let key in files) {
            let split = files[key].path.split("/");
            if (split.length <= 1) {
                split = files[key].path.split("\\");
            }
            req.body[key] = split[split.length - 1];
        }
    }
    next();
});
app.get('/', (req, res) => {
    res.send('Welcome');
});
app.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            throw new Error("Email and Password Required");
        }
        if (req.body.password === "1234") {
            const data = yield models_1.default.User.findOne({ email });
            if ((data === null || data === void 0 ? void 0 : data._id) && data.isAdmin) {
                res.cookie("userId", data._id, { signed: true,
                    // sameSite:"none", secure:true, httpOnly:true
                });
                res.json({ id: data._id });
            }
            else if ((data === null || data === void 0 ? void 0 : data._id) && !data.isAdmin) {
                res.cookie("userId", data._id, { signed: false, sameSite: "none", secure: true, httpOnly: true });
                res.json({ id: data._id });
            }
            else {
                throw new Error("can't find user");
            }
        }
        else {
            throw new Error("Invalid cred");
        }
    }
    catch (error) {
        next(error);
    }
}));
app.post("/createAdmin", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        if (!email || !password || !name) {
            throw new Error("Email and Password Required");
        }
        if (password === "1234") {
            const [firstName, ...rest] = String(name).split(" ");
            const user = {
                email,
                firstName,
                lastName: rest.join(" "),
                phone: "+17777777777",
                street: "123 west new york",
                state: "New York",
                city: "New York City",
                country: "United States",
                zipCode: "100023",
                isAdmin: true
            };
            const data = yield models_1.default.User.create(user);
            res.json({ id: data._id });
        }
        else {
            throw new Error("Invalid cred");
        }
    }
    catch (error) {
        next(error);
    }
}));
app.use(routes_1.default);
app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof Error) {
            console.log(err);
            try {
                const errorMessage = JSON.parse(err.message);
                if ("code" in errorMessage) {
                    res.status(Number(errorMessage.code));
                }
                else {
                    res.status(500);
                }
                res.json(errorMessage);
            }
            catch (error) {
                res.status(500).send('Something broke!');
            }
        }
        else {
            res.status(500).send('Something broke!');
        }
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
