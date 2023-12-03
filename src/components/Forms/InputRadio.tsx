import { getErrorMessageByPropertyName } from "@/utils/achemaValidator";
import { Radio } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import type { RadioChangeEvent } from "antd";

interface RadioProps {
  name: string;
  options: string[];
  defaultValue?: string;
  label?: string;
}

const FormRadio = ({ name, options, defaultValue, label }: RadioProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const onChangeHandler = ({ target: { value } }: RadioChangeEvent) => {
    // Handle radio value change if needed
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Radio.Group
            options={options}
            onChange={(e) => {
              field.onChange(e);
              onChangeHandler(e);
            }}
            value={field.value}
          />
        )}
      />
      <br />
      <small className="text-red-600 mt-3">{errorMessage}</small>
    </>
  );
};

export default FormRadio;




