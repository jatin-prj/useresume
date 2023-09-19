export default function ContentBody({ children }) {
  return (
    <main className="relative top-[4.5rem]">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        {/* Your content */}
        {children}
      </div>
    </main>
  );
}
