"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const noteRoute_1 = __importDefault(require("./routes/noteRoute"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api', noteRoute_1.default);
app.use('*', (req, res) => {
    res.send('incorrect link!!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
