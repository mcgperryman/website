import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';
import WritingIndexPage from './pages/writing/index';
import IndustrialAPCPage from './pages/writing/industrial-apc-as-applied-optimisation';
import MPCPage from './pages/writing/what-model-predictive-control-actually-does';
import ControlTheoryPage from './pages/writing/control-theory-and-quant-finance';
import ProjectsIndexPage from './pages/projects/index';
import MpcFromScratchPage from './pages/projects/mpc-from-scratch';
import DmcStepResponsePage from './pages/projects/dmc-step-response-controller';
import SpectralEstimationPage from './pages/projects/spectral-estimation-notebook';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/writing" element={<WritingIndexPage />} />
        <Route path="/writing/industrial-apc-as-applied-optimisation" element={<IndustrialAPCPage />} />
        <Route path="/writing/what-model-predictive-control-actually-does" element={<MPCPage />} />
        <Route path="/writing/control-theory-and-quant-finance" element={<ControlTheoryPage />} />
        <Route path="/projects" element={<ProjectsIndexPage />} />
        <Route path="/projects/mpc-from-scratch" element={<MpcFromScratchPage />} />
        <Route path="/projects/dmc-step-response-controller" element={<DmcStepResponsePage />} />
        <Route path="/projects/spectral-estimation-notebook" element={<SpectralEstimationPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
