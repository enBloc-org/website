'use client';
import * as Yup from 'yup';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState, useRef } from 'react';

const formSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[^a-zA-Z0-9]/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string>('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = searchParams.get('code');

    try {
      await formSchema.validate(
        {
          password,
          passwordConfirmation,
        },
        { abortEarly: false }
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AREBYTE_STRAPI}api/auth/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: code,
            password: password,
            passwordConfirmation: passwordConfirmation,
          }),
        }
      );

      if (response.ok) {
        setMessage('Password reset successfully');
      } else {
        const data = await response.json();
        setMessage(data.error.message);
        formRef.current?.reset();
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setMessage(error.errors[0]);
      }
    }
  };

  return (
    <div>
      <div className='mt-44 flex flex-col items-center justify-center gap-10 font-sans text-xl'>
        <Image
          src='/arebyte-Plugin-blue.png'
          alt='Arebyte plugin logo'
          width={300}
          height={350}
        />
        <div className='flex flex-col gap-5'>
          <h1 className='font-serif'>Password Recovery</h1>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        onChange={() => setMessage('')}
        className='mt-8 flex flex-col items-center gap-4'
        ref={formRef}
      >
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor='email'>Please enter your new password</label>
          <input
            type='password'
            name='password'
            id='password'
            className='h-8 w-[200px] rounded border border-gray-300'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='email'>Please enter your new password</label>
          <input
            type='password'
            name='password-confirmation'
            id='passwordConfirmation'
            className='h-8 w-[200px] rounded border border-gray-300'
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button
            type='submit'
            className='mt-10 rounded bg-blue-600 px-10 py-4 text-white'
          >
            Submit
          </button>
          {message && (
            <p className='mt-10 text-lg italic text-blue-700'>{message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
