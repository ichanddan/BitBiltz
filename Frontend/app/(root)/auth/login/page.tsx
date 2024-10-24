import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import LogInForm from "@/components/forms/login";

const LogIn = () => {
  return (
    <div className="mx-auto max-w-screen-sm">
      <Card className="p-3">
        <CardHeader>
          <div>
            <h1 className="text-2xl font-bold">Welcome, Back .</h1>
            <p>Please enter your credentials for login.</p>
          </div>
        </CardHeader>
        <CardBody>
          <LogInForm />
          <div className="mt-4">
            Don&apos;t have an account ?&nbsp;
            <Link href="/auth/sign-up" className="">
              Create New
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LogIn;
