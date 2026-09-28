export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-6 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </div>
  );
}
