import { NextRequest, NextResponse } from 'next/server';
import { createResume } from '@/agents/structured-resume';

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const { resume, message, jobUrl } = await request.json();

    // Use the jobUrl directly from the request body
    const result = await createResume(resume, message, jobUrl || '');

    return NextResponse.json({
      result: result.object.resume,
      message: result.object.message,
    });
  } catch (error) {
    console.error('Document parsing error:', error);
    return NextResponse.json(
      { error: 'Failed to parse document' },
      { status: 500 }
    );
  }
}
