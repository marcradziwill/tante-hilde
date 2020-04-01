const scrollToAnchor = (anchor) => {
  if (document.getElementById(anchor)) {
    window.scrollTo({
      top: document.getElementById(anchor).offsetTop - 60,
      left: 0,
      behavior: 'smooth',
    });
  }
};

const categories = [
  {
    name: 'Autos, Motorräder / Zubehör',
    link: 'autos-motorraeder-zubehoer',
  },
  {
    name: 'Banken / Versicherungen',
    link: 'banken-versicherungen',
  },
  {
    name: 'Bauen / Wohnen',
    link: 'bauen-wohnen',
  },
  {
    name: 'Bekleidung / Accessoires',
    link: 'bekleidung-acessoires',
  },
  {
    name: 'Betten / Heimtextilien',
    link: 'betten-heimtextilien',
  },
  {
    name: 'Bücher / Schreibwaren',
    link: 'banken-versicherungen',
  },
  {
    name: 'Büro / Computer',
    link: 'buero-computer',
  },
  {
    name: 'Dekoration / Geschenk',
    link: 'dekoration-geschenk',
  },
  {
    name: 'Energie',
    link: 'energie',
  },

  {
    name: 'Fahrräder / Zubehör',
    link: 'fahrraeder-zubehoer',
  },
  {
    name: 'Ferien / Reisen',
    link: 'ferien-reisen',
  },

  {
    name: 'Freizeit / Hobby',
    link: 'freizeit-hobby',
  },
  {
    name: 'Garten / Pflanzen',
    link: 'banken-versicherungen',
  },

  {
    name: 'Gastronomie',
    link: 'banken-versicherungen',
  },
  {
    name: 'Gesundheit / Kosmetik',
    link: 'banken-versicherungen',
  },
  {
    name: 'Handwerk',
    link: 'banken-versicherungen',
  },
  {
    name: 'Haushaltsgeräte/-waren',
    link: 'banken-versicherungen',
  },

  {
    name: 'Heimwerker-Artikel',
    link: 'banken-versicherungen',
  },
  {
    name: 'Kinder / Spielwaren',
    link: 'banken-versicherungen',
  },
  {
    name: 'Kunst / Antiquitäten',
    link: 'banken-versicherungen',
  },
  {
    name: 'Lebensmittel',
    link: 'banken-versicherungen',
  },

  {
    name: 'Möbel / Einrichtungen',
    link: 'banken-versicherungen',
  },
  {
    name: 'Kreative Dienste',
    link: 'banken-versicherungen',
  },
  {
    name: 'Schmuck /Optik',
    link: 'banken-versicherungen',
  },
  {
    name: 'Schuhe',
    link: 'banken-versicherungen',
  },

  {
    name: 'Zeitschrift / Medien',
    link: 'banken-versicherungen',
  },
  {
    name: 'Sicherheit',
    link: 'banken-versicherungen',
  },
  {
    name: 'Unterhaltungs-Elektronik',
    link: 'banken-versicherungen',
  },
  {
    name: 'Sonstiges',
    link: 'banken-versicherungen',
  },
];
export { categories, scrollToAnchor };
