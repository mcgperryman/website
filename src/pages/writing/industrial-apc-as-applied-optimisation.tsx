import ReactMarkdown from 'react-markdown';
import Section from '../../components/Section';
import content from '../../content/writing/industrial-apc-as-applied-optimisation.md?raw';

export default function IndustrialAPCPage() {
  return (
    <>
      <Section title="Industrial MPC as Applied Optimisation" description="How model predictive control becomes an applied optimisation workflow for industrial systems.">
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Section>
    </>
  );
}
