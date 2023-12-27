import { createRoot } from "react-dom/client"
import NaviBar from "./components/NaviBar.jsx"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <NaviBar />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

