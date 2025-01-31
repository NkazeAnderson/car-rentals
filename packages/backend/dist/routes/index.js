"use strict";
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
const common_1 = require("common");
const express_1 = require("express");
const crud_1 = __importDefault(require("../crud/crud"));
const common_2 = require("common");
const handlers_1 = require("./handlers");
const routes = (0, express_1.Router)();
const { appEntitiesSchemas } = common_2.commonZodSchemas;
function generateCrudRoutes(entity) {
    const basePath = entity.toLocaleLowerCase();
    const schema = appEntitiesSchemas[entity];
    routes.get(`/${basePath}/:id`, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        (0, handlers_1.routeHandler)(next, () => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return yield crud_1.default.get(entity, id); }), { code: 400, message: "Can't find item with Id" });
            const parsedData = yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return schema.passthrough().parse(data); }), { code: 500, message: "" });
            res.json(parsedData);
        }));
    }));
    routes.get(`/${basePath}`, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        (0, handlers_1.routeHandler)(next, () => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return yield crud_1.default.list(entity); }), { code: 400, message: "Can't find items" });
            const parsedData = yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return schema.passthrough().array().parse(data); }), { code: 500, message: "" });
            res.json(parsedData);
        }));
    }));
    routes.post(`/${basePath}`, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        (0, handlers_1.routeHandler)(next, () => __awaiter(this, void 0, void 0, function* () {
            console.log("body", req.body);
            //@ts-ignore
            console.log("file", req.files);
            //@ts-ignore
            const parsedData = yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return schema.omit({ "_id": true }).parse(req.body); }), { code: 400, message: "" });
            const id = yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return yield crud_1.default.create(entity, parsedData); }), { code: 400, message: "This data is malformed" });
            res.json({ id });
        }));
    }));
    routes.put(`/${basePath}/:id`, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        (0, handlers_1.routeHandler)(next, () => __awaiter(this, void 0, void 0, function* () {
            const parsedData = yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return schema.partial().parse(req.body); }), { code: 400, message: "This data is malformed" });
            const id = req.params.id;
            yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return yield crud_1.default.update(entity, id, parsedData); }), { code: 400, message: "This data is malformed" });
            res.json({ status: "updated" });
        }));
    }));
    routes.delete(`/${basePath}/:id`, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        (0, handlers_1.routeHandler)(next, () => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield (0, handlers_1.functionExecWithErrorResponder)(() => __awaiter(this, void 0, void 0, function* () { return yield crud_1.default.delete(entity, id); }), { code: 400, message: "This data is malformed" });
            res.json({ status: "deleted" });
        }));
    }));
}
generateCrudRoutes(common_1.AppEntities.Car);
generateCrudRoutes(common_1.AppEntities.Category);
generateCrudRoutes(common_1.AppEntities.Order);
generateCrudRoutes(common_1.AppEntities.User);
exports.default = routes;
