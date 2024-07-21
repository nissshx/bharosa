// components/Layout.js
export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 bg-white z-10 shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-semibold">bharosa </div>
            <div className="space-x-4">
              <span>Community</span>
              <span>About</span>
              <span className="text-red-800">Raise Dispute</span>
              <span>Contact</span>
              <button className="bg-black text-white px-4 py-2 rounded">Add a company</button>
            </div>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
      </div>
    );
  }