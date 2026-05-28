import "./CodeBlock.css";

const CodeBlock = ({ language, code }) => {
  return (
    <div className="code__block">
      <div className="flex__center dot__container">
        <span className="dot" />
        <span className="dot" /> 
        <span className="dot" />
      </div>
      <pre 
        className={`language-${language}`}
        style={{
          background: "rgba(var(--color-primary-rgb),0.03)",
          color: "skyblue",
          padding: "20px",
          fontSize: "14px",
          margin: 0,
          fontFamily: "Fira Code, Consolas, Monaco, monospace",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all"
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;