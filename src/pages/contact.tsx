import Section from '../components/Section';

export default function ContactPage() {
  return (
    <Section title="Contact" description="For research, engineering, and technical writing enquiries.">
      <div style={{ color: 'var(--muted)', maxWidth: '68ch' }}>
        <p>
          The best way to reach me is through the professional links in the footer.
          I am most interested in work connected to control, optimisation,
          quantitative systems, and applied mathematical engineering.
        </p>
      </div>
    </Section>
  );
}
