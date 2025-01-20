function Layout(props: any) {
  return (
    <>
      <LayoutMainHeader />
      <main>{props.children}</main>
    </>
  );
}

export { Layout };
