import { Routes, Route } from 'react-router-dom';
import { ExplorationProvider } from '@/hooks/useExploration';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/Home';
import Modules from '@/pages/Modules';
import ModuleDetail from '@/pages/ModuleDetail';
import Capsules from '@/pages/Capsules';
import CapsuleView from '@/pages/CapsuleView';
import Communities from '@/pages/Communities';
import CommunityDetail from '@/pages/CommunityDetail';
import News from '@/pages/News';
import NewsPost from '@/pages/NewsPost';
import Workshops from '@/pages/Workshops';
import About from '@/pages/About';
import Help from '@/pages/Help';
import Transparency from '@/pages/Transparency';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <ExplorationProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="modulos" element={<Modules />} />
          <Route path="modulos/:slug" element={<ModuleDetail />} />
          <Route path="capsulas" element={<Capsules />} />
          <Route path="capsulas/:slug" element={<CapsuleView />} />
          <Route path="comunidades" element={<Communities />} />
          <Route path="comunidades/:slug" element={<CommunityDetail />} />
          <Route path="novedades" element={<News />} />
          <Route path="novedades/:slug" element={<NewsPost />} />
          <Route path="talleres" element={<Workshops />} />
          <Route path="iniciativa" element={<About />} />
          <Route path="transparencia" element={<Transparency />} />
          <Route path="ayuda" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ExplorationProvider>
  );
}
