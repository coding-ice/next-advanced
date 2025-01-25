import { RouterProvider } from 'react-router-dom';

import KeepAliveLayout from './components/keepalive';
import router from './router';

function App() {
  return (
    <KeepAliveLayout keepPaths={['/']}>
      <RouterProvider router={router} />
    </KeepAliveLayout>
  );
}

export default App;
