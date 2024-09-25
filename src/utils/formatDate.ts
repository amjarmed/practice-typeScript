// src/utils/dateFormatter.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

// src/utils/arrayUtils.ts
export const getUniqueValues = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};
