import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import {
  arrowFunction,
  callBackFunction,
  greetingExample,
} from "../markdown-content";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "react-router";
import { useEffect } from "react";

const JavaScriptCard = () => {
  const location = useLocation();

  useEffect(() => {
    // Only scroll if there is a hash in the URL
    const elementId = location.hash.replace("#", "");
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const MarkdownContent = (code) => `

\`\`\`javascript
${code}
\`\`\`
`;
  return (
    <main className="space-y-8">
      <div className="space-y-5">
        <h1 className="font-bold text-2xl lg:text-4xl">Modern JS</h1>

        <h4 className="my-2 font-bold text-xl">
          Introduction to JavaScript (JS)
        </h4>

        <p className="font-medium text-lg">
          JavaScript (JS) is a versatile programming language that allows
          developers to create dynamic and interactive experiences on the web.
          It is the backbone of web development, powering websites alongside
          HTML and CSS. JS can run in both browsers and servers (using Node.js).
        </p>

        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          className="[&_code]:bg-secondary [&_code]:rounded-lg"
        >
          {MarkdownContent(greetingExample)}
        </ReactMarkdown>
      </div>

      <div className="space-y-5">
        <h4 className="my-2 font-bold text-xl">Introduction to ES6</h4>

        <p className="font-medium text-lg">
          ES6 (ECMAScript 2015) introduced many modern features to JavaScript,
          making it more powerful and easier to write clean code. ES6 is popular
          because it addresses many common developer pain points with new syntax
          and functionality.
        </p>
        <h4 className="my-2 font-bold text-xl">Key Benefits:</h4>
        <ul className="pl-5 font-medium text-lg list-disc">
          <li>Cleaner syntax for functions and classes.</li>
          <li>Powerful features like modules, promises, and destructuring.</li>
        </ul>
      </div>

      <Separator />

      <div className="space-y-5">
        <h4 className="my-2 font-bold text-xl">Arrow Functions</h4>

        <p className="font-medium text-lg">
          Arrow functions provide a concise way to write functions in
          JavaScript. They use the <Badge variant="Secondary">{"=>"}</Badge>{" "}
          syntax and do not have their own{" "}
          <Badge variant="Secondary">{"this"}</Badge> context.
        </p>

        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          className="[&_code]:bg-secondary [&_code]:rounded-lg"
        >
          {MarkdownContent(arrowFunction)}
        </ReactMarkdown>
      </div>

      <Separator />

      <div className="space-y-5" id="callback-functions">
        <h4 className="my-2 font-bold text-xl">Callback Functions</h4>

        <p className="font-medium text-lg">
          A callback function is a function passed as an argument to another
          function to be executed later.
        </p>

        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          className="[&_code]:bg-secondary [&_code]:rounded-lg"
        >
          {MarkdownContent(callBackFunction)}
        </ReactMarkdown>
      </div>
    </main>
  );
};

export default JavaScriptCard;
