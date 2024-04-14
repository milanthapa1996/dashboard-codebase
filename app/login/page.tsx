import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-32 w-full items-end rounded-lg bg-blue-500 p-3 md:h-40 relative">
            <Image src={'/logo.png'} alt="logo-img" fill className='object-cover'/>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
