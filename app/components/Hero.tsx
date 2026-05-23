export default function Hero() {
  return (
    <section id="about" className="max-w-2xl mx-auto px-6 pt-20 pb-16">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
        Henry Markwardt
      </h1>
      <p className="text-lg text-gray-500 mb-8 leading-relaxed">
        AI workflows &amp; automation.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        I&apos;m an Economics student at Kenyon College (Class of &apos;26) with minors in
        Statistics and French. I build production-grade AI automation systems — systems
        that save real time, surface useful information, and reduce friction for the people
        using them.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Currently an AI Workflow Intern at{" "}
        <a
          href="https://langar.co"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
        >
          Langar Holdings
        </a>
        , a HealthTech-focused asset management firm, where I design and ship AI-native
        pipelines end-to-end. I&apos;m also a Research Assistant in Kenyon&apos;s Economics
        department, working with large-scale scanner data to construct inflation metrics.
      </p>
    </section>
  );
}
