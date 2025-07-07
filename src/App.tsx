import './app.scss';
import CalcCard from './pages/CalcCard/CalcCard';

function App() {
  return (
    <>
      <div className="pageBackground">
        <div className="pageForeground">
          <CalcCard />
        </div>
      </div>
    </>
  );
}

export default App;
