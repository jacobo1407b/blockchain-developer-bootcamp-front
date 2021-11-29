import { Schema, model,models } from 'mongoose';

const UserSchema = new Schema({
    address: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    logo: { type: String },
    nameimg: { type: String },
});

//export default model('User', UserSchema)
export default models.User || model('User', UserSchema);