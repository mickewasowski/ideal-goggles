import {Routes, Route} from 'react-router-dom';

import HomeRoute from './routes/home/home';
import MainHeader from './components/project-menu-components/main-header';
import ECommerceRoute from './routes/e-commerce-landing/e-commerce-landing';
import EqualizerRoute from './routes/equalizer/equalizer';
import GithubRoute from './routes/github/github';
import LoopStudioRoute from './routes/loop-studio/loop-studio';
import TipsCalculatorRoute from './routes/tips-calculator/tips-calculator';

function App() {
  return (
    <Routes>
      <Route index element={<HomeRoute />}/>
      <Route path='project' element={<MainHeader />}>
          <Route path='e-commerce' element={<ECommerceRoute />}/>
          <Route path='equalizer' element={<EqualizerRoute />}/>
          <Route path='github' element={<GithubRoute />}/>
          <Route path='loop-studio' element={<LoopStudioRoute />}/>
          <Route path='tips-calculator' element={<TipsCalculatorRoute />}/>
      </Route>
    </Routes>
  )
}

export default App;
