import React from "react";
import Api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));

    Api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__ellipse">
          <img
            src={userAvatar}
            alt={userName}
            className="profile__avatar"
          />
          <button
            type="button"
            className="profile__avatar-edit-button"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <button
            type="button"
            className="profile__edit-button"
            name="button-edit-profile"
            onClick={props.onEditProfile}
          ></button>
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          name="button-add-element"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map(item => 
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick}
            onCardDelete={props.onCardDelete}
          />
        )}
      </section>
    </main>
  )
}

export default Main;