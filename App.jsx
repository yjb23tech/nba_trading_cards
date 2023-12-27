import { createRoot } from "react-dom/client"
import NaviBar from "./components/NaviBar.jsx"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <NaviBar />
            <div className="nba_players_league">
                <Card 
                    nba_player_graphic="nba_mj_rsz.png"
                    nba_trophy_logo="trophy_icon.png"
                    nba_player_height="6'6"
                    nba_player_position="Shooting Guard"
                    nba_player_name="Michael Jordan"
                    nba_player_bio = "The Black Cat"
                />
                <Card 
                    nba_player_graphic="nba_mj_rsz.png"
                    nba_trophy_logo="trophy_icon.png"
                    nba_player_height="6'6"
                    nba_player_position="Shooting Guard"
                    nba_player_name="Michael Jordan"
                    nba_player_bio = "The Black Cat"
                />
                <Card 
                    nba_player_graphic="nba_mj_rsz.png"
                    nba_trophy_logo="trophy_icon.png"
                    nba_player_height="6'6"
                    nba_player_position="Shooting Guard"
                    nba_player_name="Michael Jordan"
                    nba_player_bio = "The Black Cat"
                />
                <Card 
                    nba_player_graphic="nba_mj_rsz.png"
                    nba_trophy_logo="trophy_icon.png"
                    nba_player_height="6'6"
                    nba_player_position="Shooting Guard"
                    nba_player_name="Michael Jordan"
                    nba_player_bio = "The Black Cat"
                />
            </div>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

