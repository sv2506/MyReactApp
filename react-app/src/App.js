import './App.css';
import Contents from './Contents/Contents'
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Home Page
        </p>
      </header>
      {/* All the contents - movie and tv data will be displayed using the "Contents" componenet */}
      <Contents />
    </div>
  );
}

export default App;
