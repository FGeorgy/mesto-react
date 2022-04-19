// import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };
  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopup() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input type="text" id="popup__input-name" name="name" className="popup__input" placeholder="Имя" minLength="2" maxLength="40" required/>
          <span className="popup__input-error popup__input-name-error"></span>
        </label>
        <label className="popup__label">
          <input type="text" id="popup__input-about" name="about" className="popup__input" placeholder="О себе" minLength="2" maxLength="200" required/>
          <span className="popup__input-error popup__input-about-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="add-element"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input type="text" id="popup__input-place" name="name" className="popup__input" placeholder="Название" minLength="2" maxLength="30" required/>
          <span className="popup__input-error popup__input-place-error"></span>
        </label>
        <label className="popup__label">
          <input type="url" id="popup__input-url" name="link" className="popup__input" placeholder="Ссылка на картинку" required/>
          <span className="popup__input-error popup__input-url-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input type="url" id="popup__input-avatar" name="avatar" className="popup__input" placeholder="Ссылка на аватар" required/>
          <span className="popup__input-error popup__input-avatar-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="delete-element"
        title="Вы уверены?"
      ></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopup}
      />
    </>
  );
}

export default App;
