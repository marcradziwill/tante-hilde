const scrollToAnchor = (anchor) => {
  if (document.getElementById(anchor)) {
    window.scrollTo({
      top: document.getElementById(anchor).offsetTop - 100,
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
    link: 'bekleidung-accessoires',
  },
  {
    name: 'Betten / Heimtextilien',
    link: 'betten-heimtextilien',
  },
  {
    name: 'Bücher / Schreibwaren',
    link: 'buecher-schreibwaren',
  },
  {
    name: 'Büro / Computer',
    link: 'buero-computer',
  },
  {
    name: 'Dekoration / Geschenk',
    link: 'dekoration-geschenke',
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
    link: 'garten-pflanzen',
  },

  {
    name: 'Gastronomie',
    link: 'gastronomie',
  },
  {
    name: 'Gesundheit / Kosmetik',
    link: 'gesundheit-kosmetik',
  },
  {
    name: 'Handwerk',
    link: 'handwerk',
  },
  {
    name: 'Haushaltsgeräte/-waren',
    link: 'haushaltsgeraetewaren',
  },

  {
    name: 'Heimwerker-Artikel',
    link: '/heimwerkerartikel/',
  },
  {
    name: 'Kinder / Spielwaren',
    link: '/kinder-spielwaren/',
  },
  {
    name: 'Kunst / Antiquitäten',
    link: 'kunst-antiquitaeten',
  },
  {
    name: 'Lebensmittel',
    link: 'lebensmittel',
  },

  {
    name: 'Möbel / Einrichtungen',
    link: 'moebel-einrichtungen',
  },
  {
    name: 'Kreative Dienste',
    link: 'kreative-dienste',
  },
  {
    name: 'Schmuck /Optik',
    link: 'schmuck-optik',
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
    link: 'unterhaltungselektronik',
  },
  {
    name: 'Sonstiges',
    link: 'banken-versicherungen',
  },
];

export { categories, scrollToAnchor };

//   "path": "/branche/lebensmittel/"
// },
// {
//   "path": "/branche/gastronomie/"
// },
// {
//   "path": "/branche/schmuck-optik/"
// },
// {
//   "path": "/branche/bekleidung-accessoires/"
// },
// {
//   "path": "/branche/dekoration-geschenke/"
// },
// {
//   "path": "/branche/buero-computer/"
// },
// {
//   "path": "/branche/freizeit-hobby/"
// },
// {
//   "path": "/branche/handwerk/"
// },
// {
//   "path": "/branche/fahrraeder-zubehoer/"
// },
// {
//   "path": "/branche/unterhaltungselektronik/"
// },
// {
//   "path": "/branche/moebel-einrichtungen/"
// },
// {
//   "path": "/branche/sport/"
// },
// {
//   "path": "/branche/haushaltsgeraetewaren/"
// },
// {
//   "path": "/branche/zeitschrift-medien/"
// },
// {
//   "path": "/branche/sicherheit/"
// },
// {
//   "path": "/branche/ferien-reisen/"
// },
// {
//   "path": "/branche/kinder-spielwaren/"
// },
// {
//   "path": "/branche/autos-motorraeder-zubehoer/"
// },
// {
//   "path": "/branche/heimwerkerartikel/"
// },
// {
//   "path": "/branche/bauen-wohnen/"
// },
// {
//   "path": "/branche/schuhe/"
// },
// {
//   "path": "/branche/betten-heimtextilien/"
