import { Outlet } from "react-router-dom"
import Nav from "./Nav"
const Layout = () => {
    return (
        <main className="App">
            <Nav></Nav>
            <Outlet />
        </main>
    )
}

export default Layout