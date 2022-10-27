module.exports = (mongoose) => {
    const AlertSchema = mongoose.Schema(
        {
            pet_id: {
                type: mongoose.Types.ObjectId,
                ref: "Pet",
                required: true,
            },
            type: {
                type: String,
                enum: [
                    "grooming",
                    "vaccination",
                    "vet appointments",
                    "supplies",
                    "medicine",
                ],
                required: true,
            },
            date: { type: String, required: true },
            description: { type: String },
        },
        {
            timestamps: true,
        }
    );

    AlertSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;

        return object;
    });

    const Alert = mongoose.model("Alert", AlertSchema);

    return Alert;
};
