import { createRoot } from "react-dom/client"
import NaviBar from "./components/NaviBar.jsx"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <NaviBar />
            <Card 
                nba_player_graphic="nba_lbj_rsz.png"
                nba_trophy_logo="trophy_icon.png"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

