// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import SignInForm from '@/components/SingInForm';
import { Link } from '@/i18n/routing';

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-6 text-black">
        Sign In Page
      </h1>
      <SignInForm />
      <div className="flex justify-between text-sm">
        <p>Already have an account?</p>
        <Link className="underline" href="/auth/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
