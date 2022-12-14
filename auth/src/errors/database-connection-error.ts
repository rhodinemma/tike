export class DatabaseConnectionError extends Error {
    reason = 'Error connecting to database';
    constructor() {
        super();

        // extending a builtin class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}