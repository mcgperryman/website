import ReactMarkdown from 'react-markdown';
import Section from '../../components/Section';
import content from '../../content/projects/mpc-from-scratch.md?raw';

export default function MpcFromScratchPage() {
  return (
    <>
      <Section title="MPC from Scratch" description="Implementing a model predictive controller using foundational numerical methods.">
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Section>
    </>
  );
}
