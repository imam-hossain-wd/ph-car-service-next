import {  NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async(req: any,res: any)=> {
    return NextResponse.json({name:"File uploaded"})
}

