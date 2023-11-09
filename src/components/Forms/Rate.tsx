import React from 'react';
import { Rate } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

type RateFieldProps = {
  name: string;
  value?: number;
  label?: string;
  defaultValue?: number;
  handleChange?: (value: number) => void;
};

const FormRateField = ({
  name,
  value,
  label,
  defaultValue,
  handleChange,
}: RateFieldProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
     
             <Rate
            allowHalf
            onChange={handleChange ? handleChange : onChange}
            value={value}
          />
 
        )}
      />
    </div>
  );
};

export default FormRateField;
