import type { FlowbiteSkeletonTheme } from './Skeleton';

export const skeletonTheme: FlowbiteSkeletonTheme = {
  root: {
    base: 'max-w-sm animate-pulse',
  },
  variant: {
    base: 'block bg-[rgba(0,0,0,0.11)] h-[1.2em]',
    type: {
      default: 'rounded-sm transform origin-[0_55%] my-0 scale-100 text-[1rem]',
      rectangular: 'h-[60px]',
      rounded: 'h-[60px] rounded-sm',
      circular: 'rounded-[50%] w-10 h-10',
    },
  },
  image: {
    base: 'w-10 h-10 text-gray-200 dark:text-gray-600',
  },
  video: {
    base: 'flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700',
    svg: 'h-10 w-10 text-gray-200 dark:text-gray-600',
  },
  card: {
    base: 'max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700',
    cardImg: {
      base: 'flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700',
      svg: 'w-10 h-10 text-gray-200 dark:text-gray-600',
    },
    text: 'h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5',
    userIcon: {
      base: 'flex items-center mt-4',
      icon: 'w-10 h-10 me-3 text-gray-200 dark:text-gray-700',
      text: 'w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700',
    },
  },
  list: {
    base: 'max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700',
    textList: {
      base: 'flex items-center justify-between pt-4',
      list: {
        textOne: 'h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5',
        textTwo: 'w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700',
        textThree: 'h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12',
      },
    },
  },
  testimonial: {
    base: 'animate-pulse',
    textList: {
      firstLine: 'h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto',
      secondLine: 'h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]',
      author: {
        base: 'flex items-center justify-center mt-4',
        userIcon: 'w-8 h-8 text-gray-200 dark:text-gray-700 me-4',
        authorName: 'w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3',
        secondText: 'w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700',
      },
    },
  },
};
