import { TransformFnParams } from 'class-transformer/types/interfaces';

export const dateTransformer = (
  params: TransformFnParams,
): Date | undefined => {
  const value = params.value?.trim();
  if (!value) {
    return undefined;
  }
  const date = new Date(value);
  return isNaN(date.getTime()) ? undefined : date;
};
