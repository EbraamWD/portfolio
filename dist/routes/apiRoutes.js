"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoute = void 0;
var express_1 = __importDefault(require("express"));
var contactController_1 = require("../controllers/contactController");
exports.contactRoute = express_1.default.Router();
exports.contactRoute.post('/contact', contactController_1.sendMessage);
//# sourceMappingURL=apiRoutes.js.map