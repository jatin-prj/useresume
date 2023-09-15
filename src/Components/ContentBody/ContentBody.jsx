export default function ContentBody({ children }) {
  return (
    <main className="relative top-3 p-1">
      <div className="w-full">
        {/* Your content */}
        {children}
      </div>
    </main>
  );
}
