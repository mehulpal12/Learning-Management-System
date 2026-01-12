import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    // console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', evt.data)

    if (eventType === 'user.created') {
        const user = evt.data;
        const email =  user.email_addresses?.find(
    (e) => e.id === user.primary_email_address_id
  )?.email_address ?? null


    await prisma.user.upsert({
      where: { clerkId: user.id },
      update: { 
        email: email ?? undefined,
       },
      create: {
        clerkId: user.id,
        email: email
      },
    })
        


  console.log('userId:', id)
}

    return new NextResponse('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new NextResponse('Error verifying webhook', { status: 400 })
  }
}