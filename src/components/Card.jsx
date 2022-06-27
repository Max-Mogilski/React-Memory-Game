import classes from "./Card.module.css";

const Card = ({ card, handleChoice, flipped, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};
	return (
		<div className={classes.card}>
			<div className={flipped ? classes.flipped : ""}>
				<img className={classes.front} src={card.src} alt="card front" />
				<img
					className={classes.back}
					src="/img/cover.png"
					onClick={handleClick}
					alt="card back"
				/>
			</div>
		</div>
	);
};

export default Card;
