import Footer from "../componentes/Footer";
import ComprobarPago from "./ComprobarPago";
import Provider from "./Provider";
import NavBarDash from "./component/NavBarDash";
import Sidebar from "./component/Sidebar";

export const metadata = {
  title: "PEC Plan Estrategico Comercial",
  description: "PEC Plan Estrategico Comercial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        <main className="min-h-screen relative w-screen overflow-x-hidden pb-10 bg-primary-500">
          <Provider>
            <ComprobarPago>
              <NavBarDash />
              {children}

              <Sidebar />
            </ComprobarPago>
          </Provider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
