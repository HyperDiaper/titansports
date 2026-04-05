import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name:    { type: String, required: true, trim: true },
  phone:   { type: String, required: true, trim: true },
  subject: { type: String, required: true },
  message: { type: String, required: true, trim: true },
  read:    { type: Boolean, default: false },
  createdAt:{ type: Date, default: Date.now },
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
