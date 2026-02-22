import ReactMarkdown from "react-markdown";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="blog-content text-lg leading-relaxed [&_h2]:mt-12 [&_h2]:border-b-4 [&_h2]:border-black [&_h2]:pb-2 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:mb-4 [&_ul]:my-6 [&_li]:mb-2 [&_strong]:font-bold">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="mt-12 border-b-4 border-black pb-2 text-2xl font-bold">
              {children}
            </h2>
          ),
          p: ({ children }) => <p className="mb-4">{children}</p>,
          ul: ({ children }) => <ul className="my-6 list-inside list-disc space-y-2">{children}</ul>,
          li: ({ children }) => (
            <li className="border-l-4 border-[var(--accent)] pl-4">{children}</li>
          ),
          strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
