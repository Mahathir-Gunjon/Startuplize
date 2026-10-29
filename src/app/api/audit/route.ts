import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, website, email, message, phone, comment } = body;

    // Dispatch audit request directly to contactmahthir@gmail.com via FormSubmit
    try {
      await fetch('https://formsubmit.co/ajax/contactmahthir@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Free Website Audit Request from ${name || 'Prospective Client'}`,
          'Full Name': name,
          'Website URL': website || 'Not specified',
          'Email Address': email,
          'Specific Focus / Message': message || comment || 'General Audit',
          'Phone Number': phone || 'N/A',
          _template: 'table',
        }),
      });
    } catch (dispatchErr) {
      console.warn('FormSubmit dispatch warning:', dispatchErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Audit request received successfully',
    });
  } catch (error) {
    console.error('Audit API handler error:', error);
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
