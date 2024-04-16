"use server";

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY

export const tokenProvider = async ( ) => {

const user = await currentUser()
if (!user) throw new Error("Unauthenticated Log-in to  access Stream API")
if(!apiKey) throw new Error("stream Api key missing")
if(!apiSecret) throw new Error("Stream Secret Key Missing");

const client = new StreamClient(apiKey, apiSecret);

// exp is optional (by default the token is valid for an hour)
const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

const issued = Math.floor(Date.now()/1000)-60; // The time at which

const token = client.createToken(user.id, exp, issued);
 return token
}