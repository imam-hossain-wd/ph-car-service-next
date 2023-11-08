
'use client'
import { useAddReviewMutation, useReviewsQuery } from "@/redux/api/reviewSlice";
import { getUserInfo } from "@/services/auth.service";
import { IReview } from "@/types";
import { Button, Rate } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";


type Inputs = {
    comment: string;
    review: string;
  }

const Review = ({id}:any) => {
  
    const [addReview]=useAddReviewMutation()
    const { data, isLoading, isError, isSuccess } = useReviewsQuery(undefined);
      
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()

      const user:any = getUserInfo();
      // console.log(data, 'data...')


      const handleReview: SubmitHandler<Inputs> =async (data) =>{
        const review = parseInt(data?.review);
        const comment = data.comment;
        const reviewData = {
            userId  :  user?.id,
            // userName: user?.name,
            serviceId: id,
            rating  :  review,
            comment,
        }

      await addReview(reviewData)
      }

    return (
        <div className="">
            <div className=" w-[300px] h-60 mt-10 ">
          <form className="bg-gray-200 p-2 rounded" onSubmit={handleSubmit(handleReview)}>
            <div>
                <p className="text-sm">Name</p>
            <textarea {...register("comment")} className="resize rounded-md w-60 h-20"></textarea>
            </div>
            <div>
                <p className="text-sm">Review</p>
            <select {...register("review")} className="w-40 h-8 mt-2">
              <option>1</option>
              <option>2</option>
              <option>4</option>
              <option>5</option>
            </select>
            </div>
             <br />

            <Button className="" type="primary" htmlType="submit">Comment</Button>
          </form>
        </div>

        <div>
            <h4 className="mt-2 text-center">Service Review</h4>
            <div >
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
            </div>
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
