const mongooseUniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

module.exports = (mongoose) => {
    const UserSchema = mongoose.Schema(
        {
            email: {
                type: String,
                unique: true,
                required: [true, "Email is required"],
            },
            password: {
                type: String,
                required: [true, "Password is required"],
            },
            first_name: { type: String },
            last_name: { type: String },
        },
        {
            timestamps: true,
        }
    );

    UserSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    UserSchema.pre("save", function (next) {
        const user = this;

        const passwordHash = bcrypt.hashSync(user.password, 10);
        user.password = passwordHash;
        next();
    });

    UserSchema.plugin(mongooseUniqueValidator);

    const User = mongoose.model("User", UserSchema);

    return User;
};
