import ReactMarkdown from 'react-markdown';
import Section from '../../components/Section';
import content from '../../content/writing/what-model-predictive-control-actually-does.md?raw';

export default function MPCPage() {
  return (
    <>
      <Section title="What Model Predictive Control Actually Does" description="A practical explanation of MPC as a constrained prediction and feedback mechanism.">
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Section>
    </>
  );
}
