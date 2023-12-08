import { Request, Response } from 'express';

const signupController = (req: Request, res: Response) => {
    const { email } = req.body;
    res.send(email);
};

export default signupController;
