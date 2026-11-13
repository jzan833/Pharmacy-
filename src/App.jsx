function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-white">
      <section className="max-w-xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Ready to build
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          React + Vite
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-slate-300">
          Your JavaScript project is running with Tailwind CSS. Start editing
          <code className="ml-1 rounded bg-slate-800 px-2 py-1 text-sm text-cyan-300">
            src/App.jsx
          </code>
          .
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">JavaScript</span>
          <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">Tailwind CSS</span>
        </div>
      </section>
    </main>
  )
}

export default App
