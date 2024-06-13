/* import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
 */
import React from 'react';
import Layout from '@/Shared/Layout';
import UpdateProfileInformation from './Partials/UpdateProfileInformationForm'
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';
import { Link } from '@inertiajs/react';

const Edit = ({auth,status,mustVerifyEmail}) => {
  return (
    <Layout
        user={auth.user}
        title="profile"
    >   
        <div className="mt-3 ms-4 ms-sm-5">
            <Link className="d-flex text-decoration-none" style={{cursor:"pointer"}}
              href="/tasks"
            >
              <div className="text-lg black-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
              </div>

              <p className="ms-3 ms-sm-4 text-lg black-700">Back</p>
            </Link>
        </div>
        <div className="mx-auto my-0" style={{maxWidth:"800px"}}>

            <UpdateProfileInformation
                mustVerifyEmail={mustVerifyEmail}
                status={status}
            />
            <UpdatePasswordForm/>
            <DeleteUserForm/>
        </div>
    </Layout>
  )
}

export default Edit