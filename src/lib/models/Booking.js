import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  phone:    { type: String, required: true, trim: true },
  sport:    { type: String, required: true },
  date:     { type: String, required: true },
  time:     { type: String, required: true },
  players:  { type: String, required: true },
  duration: { type: String, default: '1hr' },
  notes:    { type: String, default: '' },
  status:   { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' },
  createdAt:{ type: Date, default: Date.now },
})

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
