import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Parse the form data from the request
    const body = await req.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      eventType, 
      eventDate, 
      message 
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailSubject = eventType 
      ? `New Contact Form Submission - ${eventType}`
      : 'New Contact Form Submission';

    const emailContent = `
New contact form submission received:

Customer Information:
• Name: ${firstName} ${lastName}
• Email: ${email}
• Phone: ${phone || 'Not provided'}

Event Details:
• Event Type: ${eventType || 'Not specified'}
• Event Date: ${eventDate || 'Not specified'}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/Chicago',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})} CT
    `.trim();

    // Send the email
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'contact@velvetcow.com',
      to: [process.env.EMAIL_TO || 'thevelvetcowbrews@gmail.com'],
      subject: emailSubject,
      text: emailContent,
      replyTo: email, // Allow replying directly to the customer
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
