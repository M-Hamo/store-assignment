import { ValidatorMessages } from '@shared/helpers/generic-validator';

export const AddEditProductErrorMessages: ValidatorMessages = {
  name: { required: 'Title is required' },
  price: {
    required: 'Price is required',
    min: 'Price should be grater than 1$',
  },
  fromDate: { required: 'From date is required' },
  toDate: { required: 'To date is required' },
};
