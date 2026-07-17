import { Background, Navbar, Footer, ScrollToTop } from "./index";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <Background />

      <div className="relative z-10">
        <ScrollToTop />
        <Navbar />

        <main className="pt-24">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
