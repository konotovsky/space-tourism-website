export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-93.75 px-6 sm:max-w-172 sm:px-0 xl:max-w-328">
      {children}
    </div>
  );
}
