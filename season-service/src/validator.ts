import * as createFilter from 'is-my-json-valid';
import { ValidationError } from 'is-my-json-valid';

import { season } from './schema';

export type TValidator<TType> = (obj: TType) => ValidationError[];

const validate = createFilter(season, {
  verbose: true
});

export const validator = (obj: any): ValidationError[] => {
  if (validate(obj)) {
    return [];
  }

  return validate.errors;
}