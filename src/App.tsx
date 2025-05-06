import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import NaplooPage from "@/pages/NaplooPage";
import BeautyCarePage from "@/pages/BeautyCarePage";
import CloudDrivePage from "@/pages/CloudDrivePage";
import OEMSolutionsPage from "@/pages/OEMSolutionsPage";
import ITConnectPage from "@/pages/ITConnectPage";
import InvestorPage from "@/pages/InvestorPage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import BiduaVenturePage from "@/pages/BiduaVenturePage";
import HumanVerification from "@/pages/HumanVerification";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/naploo" component={NaplooPage} />
      <Route path="/beauty-care" component={BeautyCarePage} />
      <Route path="/cloud-drive" component={CloudDrivePage} />
      <Route path="/oem-solutions" component={OEMSolutionsPage} />
      <Route path="/it-connect" component={ITConnectPage} />
      <Route path="/investor" component={InvestorPage} />
      <Route path="/bidua-venture" component={BiduaVenturePage} />
      <Route path="/human-verification" component={HumanVerification} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;