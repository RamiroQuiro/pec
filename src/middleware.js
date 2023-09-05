import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export { default } from "next-auth/middleware"


export async function middleware(request){
    let cookie = request.cookies.getAll()
   const session=await getToken({req:request,secret:process.env.NEXTAUTH_SECRET})
   console.log(session)
    return NextResponse.next()
}
export const config = { matcher: ["/dashboard/:path*"] }
// export const config = { matcher: ["/"] }