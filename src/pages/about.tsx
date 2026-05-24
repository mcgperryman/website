import Section from '../components/Section';
import Photograph from '../components/Photograph';

export default function AboutPage() {
  return (
    <>
      <Section title="About">
        <div className="about-intro">
          <div style={{ color: '#555555' }}>
            <p>
              I am an engineer and researcher from Australia, interested in stochastic dynamical systems, control theory, and the problems that emerge when theory meets the underlying characteristics of a process.
            </p>

            <p>
              The work you will find here is focused on applications on theory across the wide world of mathematics, control, and optimisation that I have found useful across both my studies and professional life.
              This includes discussions on controllers, shareable notes, and writings that bridge the gap between theory and practice in optimisation-intensive domains.
            </p>

            <p>
              From time to time, I may extend my reach to cover topics that somehow link back to the core themes of stochastics and control.
            </p>

            <p>
              In my free time, I enjoy surfing, skiing, and all sorts of outdoor activities. 
            </p>
          </div>

          <Photograph
            src="/images/profile/me_snow.jpg"
            initials="MM"
            caption="Me skiing at Mt Hotham, Australia."
          />
        </div>
      </Section>
    </>
  );
}
