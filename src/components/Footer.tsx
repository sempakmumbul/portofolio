export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 sm:mt-28 lg:mt-32">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10 lg:px-8">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h3 className="text-base font-bold tracking-tight text-slate-950 sm:text-lg">
              Muhammad Avid Maulana
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              UI/UX Designer • Front-End Developer • Informatics Education Student
            </p>
          </div>

          <p className="text-sm text-slate-500 md:text-right">
            © 2026 Muhammad Avid Maulana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}