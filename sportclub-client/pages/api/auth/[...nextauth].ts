import NextAuth, {Session} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {apiBaseURL} from "@/consts";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "email" },
                password: { label: "password", type: "password" }
            },
            authorize: async (credentials, _req): Promise<null | { id: any, email: any,roleId:number, token: any}> => {
                try {
                    if(!credentials) return null;

                    const res = await fetch(`${apiBaseURL}/auth/login`, {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({email: credentials.email, password: credentials.password}),
                    });

                    if(!res.ok){
                        throw new Error(res.statusText);
                    }

                    const data = await res.json();

                    if (data) {
                        return {
                            id: data.id,
                            email: credentials.email,
                            roleId: data.role,
                            token: data.access_token
                        };
                    }
                    return null; // Add this line to satisfy the `authorize` typings
                } catch (e: any) {
                    return Promise.reject('work please');
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }:{token: any; user: any}) {
            return { ...token, ...user };
        },

        async session({ session, token }:{session: Session; token: any}) {
            console.log('in [...nextauth]');
            console.log(token);
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: '/auth/login',
    }
}

export default NextAuth(authOptions)