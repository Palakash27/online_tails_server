module.exports = (mongoose) => {
    const PetSchema = mongoose.Schema(
        {
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                required: true,
            },
            name: { type: String },
            type: { type: String },
            breed: { type: String },
            age: { type: Number },
            color: { type: String },
            weight: { type: mongoose.Types.Decimal128 },
            gender: { type: String },
            previous_vaccination_date: { type: String },
        },
        {
            timestamps: true,
        }
    );

    PetSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Pet = mongoose.model("Pet", PetSchema);

    return Pet;
};
