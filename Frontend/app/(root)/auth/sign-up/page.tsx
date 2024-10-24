import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import SignUpForm from "@/components/forms/signup";

const SignUp = () => {
  return (
    <div className="mx-auto max-w-screen-sm">
      <Card className="p-4">
        <CardHeader className="">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Guest .</h1>
            <p>Please enter your details creating an account.</p>
          </div>
        </CardHeader>
        <CardBody>
          <SignUpForm />
          <div className="my-3">
            <p>
              Already have an account ?
              <Link href="/auth/login" className="text-center p-2 underline">
                LogIn
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUp;
