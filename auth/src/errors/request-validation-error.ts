import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    constructor(public errors: ValidationError[]) {
        super();

        // extending a builtin class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}