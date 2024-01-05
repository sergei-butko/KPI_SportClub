'use client'
import React, {FormEvent, useRef} from 'react';
import styles from "./page.module.css"

import { signIn } from "next-auth/react";

const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await signIn("credentials", {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            redirect: true,
            callbackUrl: "/",
        }).catch(reason => alert(reason));
        if(response === null){
            alert('blah')
        }
    };
    return (
        <div className='flex flex-col items-center'>
                        <div
                             className={`p-12 h-max rounded-xl py-36 mt-12 bg-no-repeat ${styles.formContainer} border-violet-300 bg-white/50 w-[580px] flex flex-col items-center`}>
                             <h2 className="text-center text-3xl mb-16">Log In</h2>
                             <form onSubmit={onSubmit} className="flex flex-col w-full">
                                 <input type="email" id="email" name="email" placeholder="email" required
                                        ref={emailRef}
                                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                                        title="Example: your.name@gmail.com"
                                        className="focus:outline-none p-1 border-black border-b-2 mb-2 bg-transparent"/>
                                 <input type="password" id="password" name="password" placeholder="password" required
                                        ref={passwordRef}
                                        minLength={3}
                                        maxLength={15}
                                        className="focus:outline-none p-1 border-black border-b-2 mb-16 bg-transparent"/>
                                 <button type="submit" className="rounded-md bg-cyan-950 py-1 text-white text-lg">Log In</button>
                             </form>
                         </div>
                         <p className='text-white mt-2'>Don`t have an account? <a className="underline" href="/auth/signup">Sign
                             Up</a></p>

                     </div>
    );
};

export default LoginPage;

// function Login() {
//
//
//     const router = useRouter();
//
//     const [errorMsg, setErrorMsg] = useState("");
//
//     const emailRef = useRef<HTMLInputElement | null>(null);
//     const passwordRef = useRef<HTMLInputElement | null>(null);
//
//     async function submitForm(e: React.FormEvent) {
//
//         e.preventDefault();
//
//
//     }
//
//
//     return (
//         <div className='flex flex-col items-center'>
//             <div
//                 className={`p-12 h-max rounded-xl py-36 mt-12 bg-no-repeat ${styles.formContainer} border-violet-300 bg-white/50 w-[580px] flex flex-col items-center`}>
//                 <h2 className="text-center text-3xl mb-16">Log In</h2>
//                 <form onSubmit={submitForm} className="flex flex-col w-full">
//                     <input type="email" id="email" name="email" placeholder="email" required
//                            ref={emailRef}
//                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
//                            title="Example: your.name@gmail.com"
//                            className="focus:outline-none p-1 border-black border-b-2 mb-2 bg-transparent"/>
//                     <input type="password" id="password" name="password" placeholder="password" required
//                            ref={passwordRef}
//                            minLength={3}
//                            maxLength={15}
//                            className="focus:outline-none p-1 border-black border-b-2 mb-16 bg-transparent"/>
//                     <button type="submit" className="rounded-md bg-cyan-950 py-1 text-white text-lg">Log In</button>
//                 </form>
//             </div>
//             <p className='text-white mt-2'>Don't have an account? <a className="underline" href="/auth/signup">Sign
//                 Up</a></p>
//
//         </div>
//     );
// }
//
// export default Login;