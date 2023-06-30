// const DatePickerPopup = forwardRef<HTMLDivElement>((_props, ref: ForwardedRef<HTMLDivElement>) => {
//   const { selectedMonth, selectedYear, view, options } = useContext(DatePickerContext);
//   const firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1);
//   const start = dayOfTheWeekOf(firstOfMonth, 1, 1);

//   return (
//     <div ref={ref} className={twMerge('absolute top-10 z-50 block pt-2', options?.datepickerClassNames)}>
//       <div
//         className={twMerge(
//           'inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700',
//           options?.theme?.background,
//         )}
//       >
//         <div>
//           {options?.title && (
//             <div
//               className={twMerge(
//                 'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
//                 options?.theme?.text,
//               )}
//             >
//               {options?.title}
//             </div>
//           )}
//           <div className="flex justify-between mb-2">
//             <ButtonPrevMonth />
//             <ButtonSelectMonth />
//             <ButtonNextMonth />
//           </div>
//         </div>
//         <div className="p-1">
//           {view === 'days' && <Days start={start} />}
//           {view === 'months' && <Months />}
//           {view === 'years' && <Years />}
//           {view === 'decades' && <Decades />}
//         </div>
//         {(options?.todayBtn || options?.clearBtn) && (
//           <div className="flex mt-2 space-x-2">
//             {options?.todayBtn && <ButtonToday />}
//             {options?.clearBtn && <ButtonClear />}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });
// DatePickerPopup.displayName = 'DatePickerPopup';

// export default DatePickerPopup;
