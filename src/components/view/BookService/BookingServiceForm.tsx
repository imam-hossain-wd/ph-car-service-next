import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormSelectField from '@/components/Forms/FormSelectField';
import FormTextArea from '@/components/Forms/FormTextArea';
import FormInput from '@/components/Forms/InputForm';
import { selectServiceOptions, vehicleModelOptions } from '@/components/constatnts/global';
import { Button } from 'antd';

const BookingServiceForm = () => {
    return (
        <div className='w-full rounded'>
             <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <div className="">
               <div className="mb-1">
               <FormInput
                  type="text"
                  name="firstName"
                  size="large"
                  placeholder="Full Name"
                />
               </div>
               <div className="mb-1" >
               <FormInput
                  type="text"
                  name="email"
                  size="large"
                  placeholder="Email"
                />
               </div>
               <div className="mb-1" >
               <FormInput
                  type="text"
                  name="phone"
                  size="large"
                  placeholder="Phone"
                />
               </div>

               <div className="mb-1" >
               <FormInput
                  type="text"
                  name="address"
                  size="large"
                  placeholder="Address"
                />
               </div>
                
              
               
               <div className="flex lg:flex-row flex-col justify-between -mb-1">
               <div className="w-full lg:w-[49%] mr-4">
               <FormSelectField
                  size="large"
                  name="vehicleModel"
                  options={vehicleModelOptions}
                  placeholder="Select your vehicle model"
                />
               </div>
                <div className="w-full lg:w-[49%]">
                <FormSelectField
                  size="large"
                  name="serviceName"
                  options={selectServiceOptions}
                  placeholder="Select your Service"
                />
                </div>
               </div>

                <div className="mb-3">
                <FormDatePicker
                  name="dateOfBirth"
                  size="large"
                />
                </div>
                 <FormTextArea
                    name="presentAddress"
                    placeholder="Describe Service"
                    rows={4}
                  />
              </div>
            </div>
            <div className="flex justify-center">
            <Button htmlType="submit" className="bg-[#0C1A2D] border-0 h-9 text-white text-[15px] w-36 mx-auto font-semibold transition ease-in-out delay-150 duration-500">
              Book Now
            </Button>
            </div>
        </div>
    );
};

export default BookingServiceForm;