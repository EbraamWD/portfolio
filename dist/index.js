"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var apiRoutes_1 = require("./routes/apiRoutes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', apiRoutes_1.contactRoute);
app.listen(PORT, function () {
    console.log('Server in ascolto sulla porta: ' + PORT);
});
//# sourceMappingURL=index.js.map