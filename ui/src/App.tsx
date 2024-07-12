import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { config } from "./wagmi-config";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "@/pages/home";
import Videos from "@/pages/videos";
import Play from "@/pages/play";
import Governance from "./pages/governance";
import Onboard from "./pages/onboard";
import Login from "./pages/login";
import UploadVideo from "./pages/upload-video";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/onboard" element={<Onboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/play" element={<Play />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/upload-video" element={<UploadVideo />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}

export default App;
