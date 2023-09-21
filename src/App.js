import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckBreaches from "./pages/CheckBreaches";
import Layout from "./pages/Layout";
import ResultPage from "./pages/ResultPage";
import ViewAction from "./pages/ViewAction";

function App() {
  return (
    // <div className="text-center">
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="check-breaches" element={<CheckBreaches />} />
          <Route path="breaches-result" element={<ResultPage />} />
          <Route path="view-action/:id" element={<ViewAction/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
