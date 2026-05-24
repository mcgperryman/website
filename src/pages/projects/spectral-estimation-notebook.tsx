import ReactMarkdown from 'react-markdown';
import Section from '../../components/Section';
import content from '../../content/projects/spectral-estimation-notebook.md?raw';

export default function SpectralEstimationPage() {
  return (
    <>
      <Section title="Spectral Estimation Notebook" description="A reproducible exploration of signal processing and estimation techniques." >
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Section>
    </>
  );
}
