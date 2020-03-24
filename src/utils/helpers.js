const scrollToAnchor = (anchor) => {
  if (document.getElementById(anchor)) {
    window.scrollTo({
      top: document.getElementById(anchor).offsetTop - 60,
      left: 0,
      behavior: 'smooth',
    });
  }
};

const categories = {
  walkthedog: {
    value: 'walkthedog',
    text: 'Tierbetreuung / Gassi gehen',
    color: '#3cb8cf',
  },
  shopping: {
    value: 'shopping',
    text: 'Einkäufe / Erledigungen',
    color: '#cf9d3c',
  },
  doc: {
    value: 'doc',
    text: 'Rezept abholen beim Arzt',
    color: '#533ccf',
  },
  pharmacy: {
    value: 'pharmacy',
    text: 'Zur Apotheke gehen',
    color: '#b8cf3c',
  },
  childcare: {
    value: 'childcare',
    text: 'Kinderbetreuung',
    color: '#cf543c',
  },
  education: {
    value: 'education',
    text: 'Bildung',
    color: '#6ecf3c',
  },
  repairs: {
    value: 'repairs',
    text: 'Kleine Reparaturen',
    color: '#cf3c6e',
  },
  dailytasks: {
    value: 'dailytasks',
    text: 'Tägliche Aufgaben',
    color: '#3ccf9d',
  },
  network: {
    value: 'network',
    text: 'Networking / Reden / Telefonieren',
    color: '#cf3c6e',
  },
  music: {
    value: 'music',
    text: 'Musik',
    color: '#cf9d3c',
  },
  digital: {
    value: 'digital',
    text: 'Digital',
    color: '#3c6ecf',
  },
  other: {
    value: 'other',
    text: 'Sonstiges',
    color: '#799cde',
  },
};
export { categories, scrollToAnchor };
