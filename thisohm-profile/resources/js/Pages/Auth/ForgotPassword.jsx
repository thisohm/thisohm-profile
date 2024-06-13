/* import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
 */
import React from 'react'
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

const ForgotPassword = ({status}) => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

  return (
    <>
        <title>App - ForgotPassword</title>
        <div className="d-flex text-xs justify-content-center align-items-center" style={{height:"100vh"}}>
            <div className="border rounded-2 p-4">
                <div className="mb-3" style={{maxWidth:"400px"}}>
                    Forgot your password? No problem. Just let us know your email address and we will email you a password                    reset link that will allow you to choose a new one.
                </div>
                    <form onSubmit={submit}>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-100 mb-2"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />

                        <div className="">
                            <button type="submit" className="btn btn-primary w-100 text-xs" disabled={processing}>
                                Email Password Reset Link
                            </button>
                        </div>

                    </form>
                </div>
        </div>
    </>
  )
}

export default ForgotPassword