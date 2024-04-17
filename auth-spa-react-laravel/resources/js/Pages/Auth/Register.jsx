/*
import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
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
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
*/
import React,{useEffect} from 'react'
import { Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        
        post(route('register'));
    };

  return (
    <>  
        <title>App - Register</title>
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <div className="border rounded-2 p-5">
                <form onSubmit={submit} style={{width:"300px"}}>
                    <h1 className="text-lg text-center">Register</h1>
                    <hr className="w-25 mx-auto"/>
                    <div className="mb-3 text-xs">
                        <label className="form-label">Username</label>
                        <input 
                            type="text" 
                            className="form-control text-xs" 
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e)=>setData('name',e.target.value)}
                        />
                    </div>
                    <InputError message={errors.name}/>

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

                    <div className="mb-3 text-xs">
                        <label className="form-label">Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control text-xs" 
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e)=>setData('password_confirmation',e.target.value)}
                        />
                    </div>
                    <InputError message={errors.password_confirmation}/>

                    <button type="submit" className="btn btn-primary w-100 text-xs" disabled={processing}>Register</button>
                    
                    <div className="d-flex justify-content-center text-xs mt-2">
                        <div className="me-1">Already have an account?</div>
                        <Link href={route('login')} className="text-decoration-none">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register