
import Admin from './Admin';
import User from './User';

function App() {
  return (
    <div className="flex items-center justify-center py-20">
      <div>
        <h3  className="text-blue-700 text-4xl font-semibold ">Password simulation</h3>
        <User />
        <Admin />
      </div>
    </div>
  );
}

export default App;
