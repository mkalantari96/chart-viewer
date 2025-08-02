# 📊 Chart Viewer

A React application to visualize **single-series** and **multi-series** chart data using **D3.js**. The app automatically detects the data type and renders the appropriate line chart with a clean and responsive UI styled with Tailwind CSS.

---

## Features

- Supports **single-series** and **multi-series** line charts.
- Automatic detection of chart type from data structure.
- Responsive SVG charts with axes and grid lines using D3.js.
- Clean and modern UI styled with Tailwind CSS.
- Modular components for easy maintenance and extension.
- Handles null data points gracefully.

---

## Demo

[Screenshot of Chart Viewer](./chart-screenshot.png)

---

## Project Structure

- `App.tsx` - Main app component that loads JSON data and renders a list of charts.
- `Chart.tsx` - Wrapper component that decides whether to render a single or multi-series chart.
- `SingleSeriesChart.tsx` - Renders a single-series line chart using D3.
- `MultiSeriesChart.tsx` - Renders a multi-series line chart using D3.
- `data.json` - JSON file containing chart configurations and data.
- `types.ts` - TypeScript definitions (e.g., `ChartData`).

---

## Getting Started

### Prerequisites

- Node.js (>=14)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mkalantari96/chart-viewer.git
   cd chart-viewer
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:5173/](http://localhost:5173/) to view the app in your browser.

---

## Usage

Add your chart data to `data.json` following this structure:

```json
[
  {
    "title": "Single Series Example",
    "data": [
      [1, 10],
      [2, 20],
      [3, 15],
      [4, null],
      [5, 30]
    ]
  },
  {
    "title": "Multi Series Example",
    "data": [
      [1, [10, 5, 3]],
      [2, [20, 10, 7]],
      [3, [15, 7, 5]],
      [4, [null, 8, 6]],
      [5, [30, 12, 9]]
    ]
  }
]
```

The app automatically detects whether the chart is single-series or multi-series based on the data shape.

---

## Technologies Used

- **React** — UI library
- **TypeScript** — Typed JavaScript
- **D3.js** — Data visualization library for rendering SVG charts
- **Tailwind CSS** — Utility-first CSS framework for styling

---

## Code Highlights

- **Chart type detection:**

  ```ts
  const first = config.data?.[0]?.[1];
  const isMulti = Array.isArray(first);
  ```

- **Multi-series chart rendering:** uses D3 line generators for each series with different colors.

- **Single-series chart rendering:** draws a simple line based on points.

---

## Future Improvements

- Add tooltips and interactivity on hover.
- Support other chart types (bar, area, scatter).
- Add legend for multi-series charts.
- Improve accessibility (ARIA labels, keyboard navigation).
- Add unit and integration tests.

---

Enjoy visualizing your data! 🚀
