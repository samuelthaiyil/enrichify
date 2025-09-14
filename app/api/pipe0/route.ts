import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const baseUrl = "https://api.pipe0.com/v1/";

export async function POST(request: NextRequest) {
  try {
    const { companyName } = await request.json();

    const result = await axios.post(`${baseUrl}/pipes/run/sync`, {
      "pipes": [
        { 
          "pipe_id": "company:identity@1",
          "config": {
            "input_fields": {
              "company_name": {
                "alias": ""
              }
            }
          }
        }
      ],
      "input": [
        {
          "id": 1,
          "name": "Tom Schmidt",
          "company_name": companyName || "Pipe0"
        }
      ]
    }, {
      headers: {
        'Authorization': `Bearer vkEaXNbvLkfMfPOkYAGbOkZyiMjFHKLusRKNOkrephQZNjVaqfQmzAJJqNGbiNxn`,
        'Content-Type': 'application/json'
      }
    });

    return NextResponse.json(result.data);
  } catch (error) {
    console.error('Pipe0 API error:', error);
    return NextResponse.json(
      { error: 'Failed to call Pipe0 API' },
      { status: 500 }
    );
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
