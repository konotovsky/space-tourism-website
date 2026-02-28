export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-full px-6 md:px-10 lg:max-w-277.5 xl:px-0">
      {children}
    </div>
  );
}
