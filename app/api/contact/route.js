import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    console.log('Received message:', payload);

    // Simulate success without real services
    return NextResponse.json(
      {
        success: true,
        message: 'Mock message sent successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error occurred.',
      },
      { status: 500 }
    );
  }
}
