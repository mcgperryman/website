import ReactMarkdown from 'react-markdown';
import Section from '../../components/Section';
import content from '../../content/projects/dmc-step-response-controller.md?raw';

export default function DmcStepResponsePage() {
  return (
    <>
      <Section title="DMC Step Response Controller" description="A discrete-time controller designed around step response behaviour and disturbance rejection.">
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Section>
    </>
  );
}
