import { createRoot } from "react-dom/client"
import NaviBar from "./components/NaviBar.jsx"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <NaviBar />
            <div className="nba_players_league">
                <Card 
                    nba_player_graphic="nba_lbj_rsz.png"
                    nba_trophy_logo="trophy_icon.png"
                    nba_player_height="6'8"
                    nba_player_position="Small Forward"
                    nba_player_name="LeBron James"
                    nba_player_bio = "The Kid From Akron"
                />
            </div>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

