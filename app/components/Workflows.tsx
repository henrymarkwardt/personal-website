type Workflow = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const workflows: Workflow[] = [
  {
    title: "Newsletter Ingestor",
    description:
      "Built for Langar Holdings' investment team. Ingests dozens of financial newsletters from email, runs LLM summarization, and surfaces live market updates and relevant topics — replacing a manual daily reading workflow and saving 30+ minutes of operational time per day.",
    tags: ["n8n", "LLM", "Email"],
  },
  {
    title: "AI-Native CRM Pipeline",
    description:
      "End-to-end pipeline connecting Granola meeting transcriptions to a CRM. An LLM extracts key insights, flags action items, suggests follow-ups, and pre-populates tailored email drafts in Outlook — complete with delivery tracking. Designed for a fast-moving deal flow environment.",
    tags: ["n8n", "Granola", "CRM", "Outlook"],
  },
  {
    title: "Polymarket Data Pipeline",
    description:
      "Scraped live granular time-series trade data from Polymarket running on an AWS t3.small instance. Built for quantitative analysis of prediction market dynamics; produced a 35-page research paper.",
    tags: ["Python", "AWS", "Data"],
  },
];

export default function Workflows() {
  return (
    <section id="workflows" className="max-w-2xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Workflows</h2>
      <p className="text-gray-500 text-sm mb-10">
        A selection of systems and automations I&apos;ve built.
      </p>
      <div className="space-y-10">
        {workflows.map((wf) => (
          <div key={wf.title}>
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h3 className="font-medium text-gray-900">
                {wf.link ? (
                  <a
                    href={wf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {wf.title}
                  </a>
                ) : (
                  wf.title
                )}
              </h3>
              <div className="flex gap-2 flex-shrink-0">
                {wf.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{wf.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
