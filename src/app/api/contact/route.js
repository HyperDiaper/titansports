import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import ContactModel from '@/lib/models/Contact'

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const { name, phone, subject, message } = body

    if (!name || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const contact = await ContactModel.create({ name, phone, subject, message })
    return NextResponse.json({ success: true, id: contact._id }, { status: 201 })
  } catch (err) {
    console.error('Contact error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const messages = await ContactModel.find().sort({ createdAt: -1 }).limit(100)
    return NextResponse.json(messages)
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
