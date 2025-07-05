"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const metricRouter_1 = __importDefault(require("./routes/metricRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/metrics', metricRouter_1.default);
app.get('/', (req, res) => {
    res.send('Hello');
});
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
