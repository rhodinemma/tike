import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { body } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { PasswordManager } from '../helpers/password-manager';
import { validateRequest } from '../middlewares/validate-request';
import { User } from '../models/user';

const router = express.Router();

router.post('/api/users/signin', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must supply a password')
], validateRequest, async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await PasswordManager.compare(existingUser.password, password);

    if (!passwordsMatch) {
        throw new BadRequestError('Invalid credentials');
    }

    // generate JWT
    const userJwt = jwt.sign({
        id: existingUser.id,
        email: existingUser.email
    }, process.env.JWT_KEY!);

    // store it on session object
    req.session = {
        jwt: userJwt
    };

    res.status(200).send(existingUser)
})

export { router as signinRouter };