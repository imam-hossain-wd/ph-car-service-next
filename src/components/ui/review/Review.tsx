"use client";
import { useAddReviewMutation, useReviewsQuery } from "@/redux/api/reviewSlice";
import { getUserInfo } from "@/services/auth.service";
import { Button, Rate } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormRateField from "@/components/Forms/Rate";

type Inputs = {
  comment: string;
  review: number;
};

const Review = ({ id }: any) => {
  const [rate, setRate] = useState(0);

  const [addReview] = useAddReviewMutation();
  const { data, isLoading, isError, isSuccess } = useReviewsQuery(undefined);

  const user: any = getUserInfo();

  const onSubmit = async (values: any) => {
    const comment = values.comment;
    const rating = values.rating;
    const reviewData = {
      userId: user?.id,
      userName: user?.name,
      serviceId: id,
      rating: rate,
      comment,
    };
    try {
      await addReview(reviewData);
    } catch (error) {}
  };

  return (
    <div className="">
      <div className=" w-[350px] h-60 mt-10 ">
        <Form submitHandler={onSubmit}>
          <div className="mb-2">
            <FormTextArea name="comment" placeholder="Enter Comment" rows={3} />
          </div>
          <div className="">
            <FormRateField name="rating" label="Rating" />
          </div>
          <Button className="mt-3" htmlType="submit" type="primary">
            Comment
          </Button>
        </Form>
      </div>

      <div className="-mt-3">
        <h4 className="">
          {data ? <span>Review({data?.length})</span> : <span>Reviews</span>}
        </h4>

        <div className="">
          <div className="bg-gray-100 w-[90%] p-3 mt-2 flex items-center">
            <p className="text-4xl flex justify-center items-center font-bold bg-gray-200 rounded-full p-2 w-14 h-14">
              <UserOutlined />
            </p>
            <div className="flex flex-col ml-8">
              <p className="mb-2">Awarapan</p>
              <p>This is best service fort ever...</p>
            </div>
          </div>
        </div>
        {/* <div >
                {
                    data && data.map((review:IReview)=> (
                        <div className="bg-gray-200 p-3 m-2 rounded" key={review?.id} >
                           <div className="flex">
                           <p className="mr-1">Name : {review?.user?.firstName}</p>
                            <p>{review?.user?.lastName}</p>
                           </div>
                            <p>Comment: {review.comment}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                    ))
                }
            </div> */}
      </div>
    </div>
  );
};

export default Review;

// user
// :
// contactN
// email
// firstName
// gender

// id
// lastName
// password
// role
// userImage
