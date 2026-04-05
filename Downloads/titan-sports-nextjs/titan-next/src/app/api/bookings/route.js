import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Booking from '@/lib/models/Booking'

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const { name, phone, sport, date, time, players, duration, notes } = body

    if (!name || !phone || !sport || !date || !time || !players) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const booking = await Booking.create({ name, phone, sport, date, time, players, duration: duration || '1hr', notes: notes || '' })
    return NextResponse.json({ success: true, id: booking._id }, { status: 201 })
  } catch (err) {
    console.error('Booking error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(100)
    return NextResponse.json(bookings)
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
