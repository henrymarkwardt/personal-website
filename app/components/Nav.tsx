export default function Nav() {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-100 z-10">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-medium text-gray-900">Henry Markwardt</span>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#workflows" className="hover:text-gray-900 transition-colors">Workflows</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Resume</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
