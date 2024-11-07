"use client";
import Auth from "@/api/auth";
import { handleResponse } from "@/helper/utils";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { LockIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

const LogInForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelLogin = async () => {
    let res = await Auth.LoginCustomer(formData);
    res = handleResponse(res);
    if (res) {
      localStorage.setItem("user", JSON.stringify(res.data.data));
      router.push("/admin");
    }
  };

  return (
    <div>
      <div>
        <Input
          type="email"
          label="Email"
          name="email"
          isRequired
          classNames={{
            inputWrapper: "rounded-md border",
            label: "font-semibold text-md",
          }}
          value={formData.email}
          onChange={handleInputChange}
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your email"
          className="p-2"
        />
      </div>

      <div>
        <Input
          type="text"
          label="Password"
          name="password"
          isRequired
          value={formData.password}
          onChange={handleInputChange}
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

      <div className="mt-3">
        <Button
          variant="solid"
          color="secondary"
          className="rounded-md"
          onClick={() => handelLogin()}
        >
          <LockIcon size={18} strokeWidth={1.5} />
          Login
        </Button>
      </div>
    </div>
  );
};

export default LogInForm;
