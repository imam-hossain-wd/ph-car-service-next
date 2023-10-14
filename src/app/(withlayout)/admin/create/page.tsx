import FormSelectField, { SelectOptions } from "@/components/Forms/FormSelectField";
import FormInput from "@/components/Forms/InputForm";
import { Button, Col, Row } from "antd";
import Form from "@/components/Forms/Form";


const CreateAdmin = () => {

    return (
        <div>
      {/* <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic", link: `/${base}/academic` },
          { label: "department", link: `/${base}/academic/department` },
        ]}
      /> */}
      <h1>Create Academic Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Academic Department Title" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            {/* <FormSelectField
              size="large"
              name="academicFacultyId"
              options={acFacultiesOptions as SelectOptions[]}
              label="Academic Faculty"
              placeholder="Select"
            /> */}
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
    );
};

export default CreateAdmin;