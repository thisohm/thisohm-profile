/* import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Delete Account</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
 */
import { useRef } from 'react';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

const DeleteUserForm = () => {
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

  return (
    <>
        <div className="border rounded-2 mx-5 my-4 p-3 p-sm-4 p-md-5">
            <h2 className="text-sm">Delete Account</h2>
            <p className="text-xs">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before
                deleting your account, please download any data or information that you wish to retain.
            </p>

            <button className="text-xs btn btn-danger" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete Account</button>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content p-4">
                    <form onSubmit={deleteUser}>
                        <h2 className="text-sm">
                            Are you sure you want to delete your account?
                        </h2>
                        <p className="text-xs">
                            Once your account is deleted, all of its resources and data will be permanently deleted. Please
                            enter your password to confirm you would like to permanently delete your account.
                        </p>

                        <div className="text-xs">
                            <label className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="form-control text-xs"
                            />
                            <InputError message={errors.password}/>
                        </div>
    
                        <div class="modal-footer">
                            <button type="reset" class="btn btn-secondary text-xs" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-danger text-xs" disabled={processing}>Delete Account</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default DeleteUserForm