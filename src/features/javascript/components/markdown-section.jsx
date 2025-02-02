import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const MarkdownSection = ({ title, description, code, hashId = "" }) => (
  <div className="space-y-5 scroll-m-20" id={hashId}>
    {title && <h4 className="my-2 font-bold text-xl">{title}</h4>}
    {description && <p className="font-medium text-lg">{description}</p>}
    {code && (
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        className="[&_code]:bg-secondary [&_code]:rounded-lg"
      >
        {`\`\`\`javascript\n${code}\n\`\`\``}
      </ReactMarkdown>
    )}
  </div>
);

export default MarkdownSection;
