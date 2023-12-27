const Card = (props) => {
    return (
        <div className="nba_player_card">
            <img src={`images/${props.nba_player_graphic}`} />
            <div className="nba_player_content">
                <div className="nba_player_core_details">
                    <img src={`images/${props.nba_trophy_logo}`} />
                    <span><p>{props.nba_player_height}</p></span>
                    <span><p>{props.nba_player_position}</p></span>
                </div>
                <h1>{props.nba_player_name}</h1>
                <p>{props.nba_player_bio}</p>
            </div>
        </div>
    )
}

export default Card;
