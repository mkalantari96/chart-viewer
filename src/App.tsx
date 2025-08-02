import data from "./data.json";
import Chart from "./components/Chart";
import type { ChartData } from "./types";

function App() {
  const charts = data as ChartData[];

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">
            📊 Chart Viewer
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Visualize single and multi-series data with D3.js
          </p>
        </header>

        <section className="grid gap-10">
          {charts.map((chart, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-200"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {chart.title}
              </h2>
              <Chart config={chart} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
