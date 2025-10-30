export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-200/70 bg-white">
      <div className="container-responsive py-6 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-center">© {year} Founder Insights Inc.</p>
        <p className="text-center">Amplifying Founders. Empowering Ideas.</p>
      </div>
    </footer>
  )
}

