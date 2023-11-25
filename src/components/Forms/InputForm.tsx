"use client";

import { getErrorMessageByPropertyName } from "@/utils/achemaValidator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small" | "middle";
  value?: string | string[] | undefined;
  defaultValue?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  defaultValue,
  placeholder,
  validation,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              className="mt-2"
              placeholder={placeholder}
              {...field}
              defaultValue={defaultValue ? defaultValue : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              className="mt-2"
              placeholder={placeholder}
              {...field}
              // value={value ? value : field.value}
              defaultValue={defaultValue ? defaultValue : field.value}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInput;