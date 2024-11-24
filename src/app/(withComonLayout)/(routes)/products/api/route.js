import { connectDb } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async() =>{
    const db = await connectDb()
    const productsCollections = db.collection('products')
    try {
        const products = productsCollections.find().toArray()
        return NextResponse.json({products})
    } catch (error) {
        return NextResponse.json({message : "No Data Found", error})
    }
}