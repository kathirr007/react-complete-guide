import type { LegacyRef, MutableRefObject } from 'react';

const Input = forwardRef(({ label, isTextarea = false, ...props }: { label: string; isTextarea?: boolean; [key: string]: any }, ref: any) => {
  const inputClasses = 'w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  const labelClasses = 'text-sm font-bold titlecase text-stone-500 cursor-pointer';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className={labelClasses} htmlFor={(props as any).id}>{label}</label>
      {
        isTextarea ? <textarea ref={ref} className={inputClasses} {...props} /> : <input ref={ref} className={inputClasses} {...props} />
}
    </p>
  );
});

export { Input };
