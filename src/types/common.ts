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
};
