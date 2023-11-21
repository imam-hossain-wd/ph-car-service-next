"use client";

import { useSingleBookingQuery } from "@/redux/api/bookingApi";
import Loading from "../loading/Loading";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import { Button, Col, Row } from "antd";
import FormInput from "@/components/Forms/InputForm";
import UploadImage from "@/components/ui/uploadImage/UploadImage";

const BookingEdit = ({params}:any) => {
    const { data, isLoading } = useSingleBookingQuery(params?.id);

    if (isLoading) {
      return <Loading />;
    }  
    const { bookingName, bookingImage,date, service, user } = data;
    const {
      contactNo,
      email,
      firstName,
      gender,
      lastName,
      password,
      role,
      userImage,
    } = user;

    const onSubmit = (values:any) => {
        console.log(values);

    }

    return (
        <div>
            <Form submitHandler={onSubmit} >
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
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
                  name="firstName"
                  size="large"
                  label="Booking Name"
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
                  name="middleName"
                  size="large"
                  label="Booking Price"
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
                  name="lastName"
                  size="large"
                  label="User Name"
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
                  name="lastName"
                  size="large"
                  label="Email"
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
                  name="lastName"
                  size="large"
                  label="Contact No"
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
                  name="lastName"
                  size="large"
                  label="Gender"
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