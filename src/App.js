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
import Iframe from "./pages/Iframe";
import Iframe2 from "./pages/Iframe2";
import Iframe3 from "./pages/Iframe3";
import Iframe4 from "./pages/Iframe4";
import Iframe5 from "./pages/Iframe5";
import Loginpage from "./pages/Loginpage";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
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
        <Route exact path="/iframe" element={<Iframe />} />
        <Route exact path="/iframe2" element={<Iframe2 />} />
        <Route exact path="/iframe3" element={<Iframe3 />} />
        <Route exact path="/iframe4" element={<Iframe4 />} />
        <Route exact path="/iframe5" element={<Iframe5 />} />
      </Routes>
    </div>
  );
}

export default App;
