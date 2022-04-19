function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  };
  function handleDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="element">
      <img
        src={props.card.link}
        className="element__image"
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="element__title-wrapper">
        <h2 className="element__title">
          {props.card.name}
        </h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__like-button"></button>
          <span className="element__like-count">
            {props.card.likes.length}
          </span>
        </div>
      </div>
      <button
        type="button"
        className="element__delete-button"
        onClick={handleDelete}
      ></button>
    </article>
  )
}

export default Card