/*
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
*/

import React,{useEffect} from 'react'
import InputError from '@/Components/InputError';
import { Link, useForm} from '@inertiajs/react';

const Login = ({status, canResetPassword}) => {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
      
        post(route('login'));
    };

  return (
    <>  
        <title>App - Login</title>
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <div className="border rounded-2 p-md-4 p-3">
                <form onSubmit={submit} style={{width:"100%"}}>
                    <h1 className="text-lg text-center">Welcome Back!</h1>
                    <hr className="w-25 mx-auto"/>
                    <div className="mb-3 text-xs">
                        <label className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control text-xs" 
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e)=>setData('email',e.target.value)}
                        />
                    </div>
                    <InputError message={errors.email}/>

                    <div className="mb-3 text-xs">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control text-xs" 
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={(e)=>setData('password',e.target.value)}
                        />
                    </div>
                    <InputError message={errors.password}/>

                    <div className="d-flex text-xs justify-content-between">
                        <div className="mb-3 me-5 form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input text-xs" 
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember',e.target.checked)}
                                />
                            <label className="form-check-label">Remember me</label>
                        </div>

                        <div>
                        {canResetPassword && (
                            <Link href={route('password.request')} className="text-decoration-none">Forgot your password?</Link>
                        )}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 text-xs" disabled={processing}>Login</button>
                    
                    <div className="d-flex justify-content-center text-xs mt-2">
                        <div className="me-1">Don't have an account?</div>
                        <Link href={route('register')} className="text-decoration-none">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login