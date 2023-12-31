export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IService = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  availability: boolean;
};

export type IBookingData = {
  bookingName: string;
  userId: string;
  serviceId: string;
  date: string;
  bookingImage:string;
};

export type IUserRegisterProps = {
  email: string;
  contactNo: string;
  gender: "male | female";
  password: string;
  firstName: string;
  lastName: string;
};

export type IReview = {
  id: string;
  user: any;
  userId: string;
  serviceId: string;
  rating: number;
  comment: string;
};
