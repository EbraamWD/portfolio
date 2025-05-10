import { Request, Response } from 'express';

export const sendMessage = (req: Request, res: Response): Response => {
    const { name, email, message } = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Tutti i campi devono essere completati'});
    }
    console.log('Messaggio ricevuto: ', { name, email, message });
    return res.status(200).json({ success: true, message: 'Messaggio inviato correttamente'});
};
