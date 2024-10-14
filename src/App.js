import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Homepage from "./pages/Homepage";
import InnerPage from "./pages/InnerPage";
import "./App.css";
import TradingGuides from "./pages/TradingGuides";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contacts from "./pages/Contacts";
import Disclamer from "./pages/Disclamer";
import Safety from "./pages/Safety";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NotFound from "./pages/NotFound";
import "react-phone-input-2/lib/style.css";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index exact element={<Homepage />} />
          <Route exact path="/provider/:id" element={<InnerPage />} />
          <Route exact path="/guides" element={<TradingGuides />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/disclaimer" element={<Disclamer />} />
          <Route exact path="/safety" element={<Safety />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
