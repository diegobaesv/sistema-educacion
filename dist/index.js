"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/saludar', (req, res) => {
    console.log('Se ha hecho una peticion!!');
    res.send('Hola Mundo');
});
app.listen(port, () => {
    console.log(`App escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map