"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
var sendMessage = function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, message = _a.message;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Tutti i campi devono essere completati' });
    }
    console.log('Messaggio ricevuto: ', { name: name, email: email, message: message });
    return res.status(200).json({ success: true, message: 'Messaggio inviato correttamente' });
};
exports.sendMessage = sendMessage;
//# sourceMappingURL=contactController.js.map