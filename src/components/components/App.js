import Header from './components/Header';
import MasonryGrid from './components/MasonryGrid';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="px-4">
        <MasonryGrid />
      </main>
    </div>
  );
}

export default App;
