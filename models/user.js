const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

//passportlocalmongoose automatically username aur password create kardega
//schema ke andar, bas userSchema ko plugin karna padta hai

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);