export default function SearchDronesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 px-6 w-full max-w-screen-2xl mx-auto">
      <div className="w-full">{children}</div>
    </section>
  );
}
