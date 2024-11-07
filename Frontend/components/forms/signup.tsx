"use client";
import Auth from "@/api/auth";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
interface FormData {
  email: string;
  otp: string;
  fullName: string;
  phone: string;
  password: string;
}
const SignUpForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    otp: "",
    fullName: "",
    phone: "",
    password: "",
  });
  const sendOTP = async () => {
    const res = await Auth.sendCustomerOTP(formData.email);
    console.log(res);
    if (res) {
      setStep(2);
    }
  };
  const otpVerify = async () => {
    const res = await Auth.verifyCustomerOTP(formData.email, formData.otp);
    if (res) {
      setIsEmailVerified(true);
      setStep(3);
    }
  };
  const signUp = async () => {
    const res = await Auth.registerCustomer(
      formData.email,
      formData.password,
      formData.fullName,
      formData.phone
    );
    if (res) {
      router.push("/");
    }
  };
  const handleSignUp = async () => {
    if (step == 1) sendOTP();
    else if (step == 2) otpVerify();
    else signUp();
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <Input
          type="email"
          label="Email"
          disabled={step !== 1}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          isRequired
          classNames={{
            inputWrapper: "rounded-md border",
            label: "font-semibold text-md",
          }}
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your email"
          className="p-2"
        />
      </div>

      {step === 2 && (
        <div>
          <Input
            type="text"
            label="OTP"
            name="otp"
            value={formData.otp}
            onChange={handleInputChange}
            isRequired
            classNames={{
              inputWrapper: "rounded-md border",
              label: "font-semibold text-md",
            }}
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your otp"
            className="p-2"
          />
        </div>
      )}
      {isEmailVerified && (
        <>
          <div>
            <Input
              type="text"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              isRequired
              classNames={{
                inputWrapper: "rounded-md border",
                label: "font-semibold text-md",
              }}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Enter your name"
              className="p-2"
            />
          </div>
          <div>
            <Input
              type="Number"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              isRequired
              classNames={{
                inputWrapper: "rounded-md border",
                label: "font-semibold text-md",
              }}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Phone"
              className="p-2"
            />
          </div>
          <div>
            <Input
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              isRequired
              classNames={{
                inputWrapper: "rounded-md border",
                label: "font-semibold text-md",
              }}
              variant="bordered"
              labelPlacement="outside"
              placeholder="Enter your Password"
              className="p-2"
            />
          </div>
        </>
      )}
      <div className="mt-3">
        <Button variant="solid" color="secondary" onClick={handleSignUp}>
          {step == 1 ? "Continue" : step == 2 ? "Verify" : "Sign Up"}
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
