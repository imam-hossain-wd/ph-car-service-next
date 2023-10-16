import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async(req:NextApiRequest,res:NextApiResponse)=> {
    return NextResponse.json({name:"File uploaded"})
}