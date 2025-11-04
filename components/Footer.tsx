export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-blue-100/70 bg-blue-50">
      <div className="container-responsive py-6 text-sm text-neutral-700 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-center">© {year} Founder Insights Inc.</p>
        <p className="text-center">Amplifying Founders. Empowering Ideas.</p>
      </div>
    </footer>
  )
}

