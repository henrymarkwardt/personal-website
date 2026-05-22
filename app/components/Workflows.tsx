type Workflow = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const workflows: Workflow[] = [
  {
    title: "Workflow One",
    description:
      "A short description of what this workflow does, the problem it solves, and the tools it uses.",
    tags: ["Automation", "n8n"],
    link: "#",
  },
  {
    title: "Workflow Two",
    description:
      "A short description of what this workflow does, the problem it solves, and the tools it uses.",
    tags: ["AI", "Claude"],
    link: "#",
  },
  {
    title: "Workflow Three",
    description:
      "A short description of what this workflow does, the problem it solves, and the tools it uses.",
    tags: ["Data", "Sheets"],
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
