import ReactMarkdown from 'react-markdown';
import Section from '../../components/Section';
import content from '../../content/writing/control-theory-and-quant-finance.md?raw';

export default function ControlTheoryPage() {
  return (
    <>
      <Section title="Control Theory and Quant Finance" description="A conceptual connection between control systems and algorithmic finance.">
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Section>
    </>
  );
}
