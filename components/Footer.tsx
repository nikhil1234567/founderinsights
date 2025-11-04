export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-blue-100/70 bg-blue-50 mobile-safe-area">
      <div className="container-responsive py-4 sm:py-6 text-xs sm:text-sm text-neutral-700 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-3">
        <p className="text-center">© {year} Founder Insights Inc.</p>
        <p className="text-center">Amplifying Founders. Empowering Ideas.</p>
      </div>
    </footer>
  )
}

