import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        reuired: true,
    }
});

const UserModel = model("UserModel", UserSchema);

export default UserModel;
