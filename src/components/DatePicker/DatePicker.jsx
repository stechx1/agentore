/* eslint-disable @next/next/no-img-element */
export const DatePicker = () => {
  return (
    <div class="relative">
      <input
        type="text"
        onfocus="(this.type='date')"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Pick a date range"
      />
      <div class="flex absolute inset-y-0 right-[16px] items-center pl-3 pointer-events-none">
        <img src="/icons/calendar.svg" alt="calendar" />
      </div>
    </div>
  );
};
