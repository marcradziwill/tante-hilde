import React, { createContext, useState } from 'react';

export const NewsletterContext = createContext();

const NewsletterProvider = ({ children }) => {
  const [popupState, setPopupState] = useState(false);
  const [newsletterModeState, setNewsletterMode] = useState('NORMAL');

  const togglePopup = () => {
    setPopupState(!popupState);
  };
  const setPopup = (state) => {
    setPopupState(state);
  };
  const setNewsletterModes = (mode) => {
    setNewsletterMode(mode);
  };
  return (
    <NewsletterContext.Provider
      value={{
        newsletterModeState,
        popupState,
        togglePopup,
        setPopup,
        setNewsletterModes,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};

export default NewsletterProvider;
