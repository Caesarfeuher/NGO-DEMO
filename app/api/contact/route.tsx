import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Parse the request body as JSON
    const { firstName, lastName, email, message } = await request.json();

    // Set up Nodemailer transporter with your email configuration
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '465', 10), // Parse port as integer
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password or app password if using Gmail
        },
    });

    // Define email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Replace with the website owner's email
        subject: 'Pretonia NGO Contact',
        text: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
