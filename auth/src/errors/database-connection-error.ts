export class DatabaseConnectionError extends Error {
    statusCode = 500;
    reason = 'Error connecting to database';
    constructor() {
        super();

        // extending a builtin class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
}