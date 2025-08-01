import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  HomePage,
  EmergencyGuidePage,
  PropertyLookupPage,
  ReportPage,
  TrackerPage,
  KnowYourRightsPage,
} from './pages';

function App() {
  return (
    <BrowserRouter basename="/SafeSpace">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/emergency-guide" element={<EmergencyGuidePage />} />
          <Route path="/property-lookup" element={<PropertyLookupPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="/know-your-rights" element={<KnowYourRightsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;