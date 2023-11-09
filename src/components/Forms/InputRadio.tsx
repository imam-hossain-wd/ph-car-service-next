import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';


const plainOptions = ['Male', 'Female', 'Other'];

const InputRadio = () => {
  const [value, setValue] = useState('Male');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    setValue(value);
  };


  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value} />
    </>
  );
};

export default InputRadio;