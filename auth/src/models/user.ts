import mongoose from 'mongoose';

// an interface that describes properties
// required to create a new user
interface UserAttributes {
    email: string;
    password: string;
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

const User = mongoose.model('User', userSchema);

const buildUser = (attributes: UserAttributes) => {
    return new User(attributes);
};

export { User, buildUser };