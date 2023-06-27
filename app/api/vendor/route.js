import { prisma } from '../../../server/db/client.js';
import { NextResponse } from 'next/server.js';

// remove in production
export async function GET(request) {
    return NextResponse.json({
        status: 200,
        body: "Testing vendor route"
    });
}

export async function POST(request) { }