export function Input({ id, label, name, ...props }: Readonly<{ id: string; label: string; name?: string; [key: string]: any }>) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} required type="text" {...props} />
    </p>
  );
}
