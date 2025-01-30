export function ToastMessage({ data }: Readonly<{ data: { title: string; message: string } }>) {
  return (
    <div>
      <h3 style={{ margin: 0 }}>{data.title}</h3>
      {data.message}
    </div>
  );
}
