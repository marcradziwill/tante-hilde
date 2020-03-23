const pull = require('lodash').pull;
// const join = require('lodash').join;
const last = require('lodash').last;
const i18n = require('./i18n');

const removeTrailingSlashes = (string) => {
  if (string !== '/') {
    string = string.replace(/^\/|\/$/g, '');
  }
  return string;
};

const getLastEntryFromPath = (path) => {
  const splittedPath = path.split('/');
  return last(pull(splittedPath, ''));
};

const returnCorrectUrl = (path, lang, isDefault) => {
  let translatedPath = '';
  if (isDefault) {
    if (path === '/') {
      translatedPath = path;
    } else {
      translatedPath = `/${path}/`;
    }
  } else if (path === '/') {
    translatedPath = `/${lang}/`;
  } else {
    translatedPath = `/${lang}/${path}/`;
  }
  return translatedPath;
};

const getTranslatedPathIfExists = (path, lang) => {
  const isDefault = i18n[lang].default;
  const urlTranslations = i18n[lang].urlTranslations;
  if (!urlTranslations) {
    throw Error('no url translations provided');
  }
  let newPath = '';
  let lastEntry = '';

  if (path === '/') {
    lastEntry = 'home';
  } else if (path === '404.html') {
    newPath = removeTrailingSlashes(path);
  } else {
    newPath = removeTrailingSlashes(path);
    lastEntry = getLastEntryFromPath(newPath);
  }

  if (path !== '404.html' && urlTranslations[lastEntry] === undefined) {
    return undefined;
  }
  const urlFromConfig = urlTranslations[lastEntry]
    ? urlTranslations[lastEntry].link
    : newPath;

  return {
    entry: lastEntry,
    path: returnCorrectUrl(urlFromConfig, lang, isDefault),
  };
};

exports.getTranslatedPathIfExists = getTranslatedPathIfExists;
