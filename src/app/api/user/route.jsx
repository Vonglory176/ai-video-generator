import { NextResponse } from "next/server"
import { db } from "@/app/configs/db"
import { USER_TABLE } from "@/app/configs/schema"
import { eq } from "drizzle-orm"

export async function POST(req) {
    const { user } = await req.json()

    // Check for existing user
    const existingUser = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email,user?.primaryEmailAddress.emailAddress))

    // If user does not exist, create new user
    if (existingUser.length == 0) {
        const newUser = await db.insert(USER_TABLE).values({
            email: user?.primaryEmailAddress.emailAddress,
            name: user?.fullName
        }).returning(USER_TABLE)

        return NextResponse.json(newUser[0])
    }
    
    return NextResponse.json(existingUser[0]) // message: "User saved" 
}