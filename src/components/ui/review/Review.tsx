"use client";
import { useAddReviewMutation, useReviewsQuery } from "@/redux/api/reviewSlice";
import { getUserInfo } from "@/services/auth.service";
import { Button, Rate, message } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormRateField from "@/components/Forms/Rate";
import { IReview } from "@/types";
import Image from "next/image";

type Inputs = {
  comment: string;
  review: number;
};

const Review = ({ id }: any) => {
  const [rate, setRate] = useState(0);

  const [addReview] = useAddReviewMutation();
  const { data, isLoading, isError, isSuccess } = useReviewsQuery(undefined);
  // console.log(data, "review data..");

  const user: any = getUserInfo();

  const onSubmit = async (values: any) => {
    const comment = values.comment;
    const rating = values.rating;

    if(!comment){
      return message.error("First Write Comment")
    }
    if(!rating){
      return message.error("First give rating")
    }
    if(!user?.id){
      return message.error("First you need to login")
    }
    const reviewData = {
      // userId: "1d4eaaef-62bf-44e2-81ce-77b5a04cb8f0",
      userId: user?.id,
      userName: user?.name,
      serviceId: id,
      rating: rating,
      comment,
    };

    try {
      await addReview(reviewData);
      message.success("Give review successful")
    
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

      <div className="-mt-8">
        <h4 className="">
          {data ? <span>Review({data?.length})</span> : <span>Reviews</span>}
        </h4>
        <div className=" w-[90%] p-3 mt-2 flex flex-col items-center">
          {data &&
            data.map((review: IReview) => (
              <div
                className="bg-gray-100 p-2 w-full flex  p-3 m-2 rounded"
                key={review?.id}
              >
                {review?.user?.userImage ? (
                  <Image
                    src={review?.user?.userImage}
                    alt="review"
                    width={20}
                    height={20}
                  />
                ) : (
                  <p className="text-4xl flex justify-center items-center font-bold bg-gray-200 rounded-full p-2 w-14 h-14">
                    <UserOutlined />
                  </p>
                )}
               
               <div className="flex justify-between">
               <div className="flex flex-col ml-8 mr-10">
                  <p className="mb-2">
                    {review?.user?.firstName} {review?.user?.lastName}
                  </p>
                  <p>{review?.comment}</p>
                </div>
                <div className="">
                  <Rate disabled defaultValue={review?.rating} />
                </div>
               </div>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Review;

