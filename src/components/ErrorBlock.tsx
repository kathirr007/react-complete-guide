export function ErrorBlock({ title, message }: Readonly<{ title: string; message: string }>) {
  return (
    <div className="error-wrapper">
      <div className="error">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
