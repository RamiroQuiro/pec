import Footer from "../componentes/Footer"
import NavBarDash from "./component/NavBarDash"
import Sidebar from "./component/Sidebar"


export const metadata = {
  title: 'PEC Plan Estrategico Comercial',
  description: 'PEC Plan Estrategico Comercial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden ">
        <NavBarDash/>
        {children}
        
        <Sidebar/>
        <Footer/>
        </body>
    </html>
  )
}
