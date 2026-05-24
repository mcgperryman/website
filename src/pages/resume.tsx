import Section from '../components/Section';

const resumeUrl = '/resume/resume_mperryman.pdf';

export default function ResumePage() {
  return (
    <Section title="Resume" description="A compact record of research, engineering, and technical work.">
      <div style={{ color: 'var(--muted)', maxWidth: '68ch' }}>
        <p>
          A PDF version is embedded below. You can also open it directly if your browser does not display inline PDFs.
        </p>
      </div>
      <div className="resume-actions">
        <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">
          Open PDF →
        </a>
      </div>
      <div className="pdf-viewer" aria-label="Resume PDF viewer">
        <object data={resumeUrl} type="application/pdf">
          <p>
            This browser could not display the resume inline.{' '}
            <a href={resumeUrl} target="_blank" rel="noreferrer">Open the PDF</a>.
          </p>
        </object>
      </div>
    </Section>
  );
}
