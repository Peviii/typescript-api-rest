import mongoose from 'mongoose';

export interface studioType extends mongoose.Document {
    name: string;
    specialty: string;
    budgets: string;
}

const studioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    budgets: { type: String, required: true },
}, { timestamps: true })

const Studio = mongoose.model<studioType>("Studio", studioSchema);

export default Studio;
