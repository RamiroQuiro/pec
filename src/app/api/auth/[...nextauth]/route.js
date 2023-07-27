import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({

    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{
                email:{
                    label:"Email",type:"text",placeholder:"email"
                },
                password:{
                    label:"password",type:"password"
                },
            },
             authorize(credentials,req){
                const user={id:1,fullName:"",email:"rama.exe@fmail.com"}
                return user
            }
        })
    ]

})

export { handler as GET, handler as POST }