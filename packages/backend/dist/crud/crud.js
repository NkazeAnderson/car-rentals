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
const models_1 = __importDefault(require("../models/models"));
class Crud {
    getModel(entity) {
        return models_1.default[entity];
    }
    create(entity, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.getModel(entity);
            data._id = crypto.randomUUID().split("-").join("").substring(0, 24);
            const { _id } = yield model.create(data);
            return _id;
        });
    }
    get(entity, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.getModel(entity);
            return yield model.findById(id);
        });
    }
    list(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.getModel(entity);
            return yield model.find();
        });
    }
    update(entity, id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.getModel(entity);
            yield model.findByIdAndUpdate(id, data);
        });
    }
    delete(entity, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.getModel(entity);
            yield model.findByIdAndDelete(id);
        });
    }
}
const crud = new Crud();
exports.default = crud;
