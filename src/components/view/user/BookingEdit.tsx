"use client";

import { useSingleBookingQuery, useUpdateBookingMutation } from "@/redux/api/bookingApi";
import Loading from "../loading/Loading";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import { Button, Col, Row } from "antd";
import FormInput from "@/components/Forms/InputForm";
import UploadImage from "@/components/ui/uploadImage/UploadImage";
import { useAppDispatch } from "@/redux/hooks";

const BookingEdit = ({params}:any) => {
    const { data, isLoading } = useSingleBookingQuery(params?.id);
    const [updateBooking] = useUpdateBookingMutation();
    const dispatch = useAppDispatch();

    if (isLoading) {
      return <Loading />;
    }  
    const {id, bookingName:name, bookingImage,date, service, user } = data;
    const {contactNo:bookingContactNo,email:bookingEmail,firstName,gender:bookingUserGender,lastName,userImage} = user;
    
    const onSubmit = (values:any) => {
        const bookingName = values?.bookingName || name;
        const price = values?.price || service?.price ;
        const userName = values?.userName || firstName+" "+lastName ;
        const email = values?.email || bookingEmail ;
        const contactNo = values?.contactNo || bookingContactNo ;
        const gender = values?.gender || bookingUserGender ;
        const bookingUpdateData = {
          bookingName,
          price,
          userName,
          email,
          contactNo,
          gender
        }
        dispatch(updateBooking({id, bookingUpdateData}))

 }

    return (
        <div className="">
            <Form submitHandler={onSubmit} >
          <div className="border border-2 border-gray-300 rounded p-8 mb-4"
            // style={{
            //   border: "1px solid #d9d9d9",
            //   borderRadius: "5px",
            //   padding: "15px",
            //   marginBottom: "10px",
            // }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Booking Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="bookingName"
                  size="large"
                  label="Booking Name"
                  defaultValue={name}
                
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="price"
                  size="large"
                  label="Booking Price"
                  defaultValue={service?.price}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="userName"
                  size="large"
                  label="User Name"
                  defaultValue={firstName + " " +lastName}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="email"
                  size="large"
                  label="Email"
                  defaultValue={bookingEmail}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              > 
                <FormInput
                  type="text"
                  name="contactNo"
                  size="large"
                  label="Contact No"
                  defaultValue={bookingContactNo}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              > 
                <FormInput
                  type="text"
                  name="gender"
                  size="large"
                  label="Gender"
                  defaultValue={bookingUserGender}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="file" defaultImageUrl={bookingImage}  />
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Update Booking Info
          </Button>
        </Form>
        </div>
    )
};

export default BookingEdit;