import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRomm } from './pages/create-room';
import { Room } from './pages/rooms';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRomm />} index />
          <Route element={<Room />} path="/room/:id" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
