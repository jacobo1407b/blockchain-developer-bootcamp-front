import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    address: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    logo: { type: String, required: true },
    nameimg: { type: String, required: true },
});

export default model('User', UserSchema)