import mongoose from 'mongoose';
import { Password } from '../helpers/password';

// an interface that describes properties
// required to create a new user
interface UserAttributes {
    email: string;
    password: string;
}

// an interface that describes properties
// a user model has
interface UserModel extends mongoose.Model<UserDocument> {
    build(attributes: UserAttributes): UserDocument;
}

// an interface that describes the properties
// a User document has
interface UserDocument extends mongoose.Document {
    email: string,
    password: string,
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

userSchema.statics.build = (attributes: UserAttributes) => {
    return new User(attributes);
}

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export { User };