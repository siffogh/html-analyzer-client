import serviceCustomizations from './assets/json/customizations';
import { find } from 'lodash/fp';

export const getQueryParam = key =>
  decodeURIComponent(window.location.search.replace(new RegExp(`^(?:.*[&\\?]${encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&')}(?:\\=([^&]*))?)?.*$`, 'i'), '$1'));

export const getCustomizations = ({ s, c, o }) => {
  // Match by serviceName, country, oc  PRIORITY 1
  const res1 = find(({ serviceName, country, oc }) =>
    (serviceName === s && c === country && o === oc))(serviceCustomizations);
  // Match by serviceName, country  PRIORITY 2
  const res2 = find(({ serviceName, country, oc }) =>
    (serviceName === s && c === country && !oc))(serviceCustomizations);
  // Match by serviceName  PRIORITY 3
  const res3 = find(({ serviceName, country, oc }) =>
    (serviceName === s && !country && !oc))(serviceCustomizations);

  if (res1) {
    return ({ prefix: `${s}-${c}-${o}`, customizations: res1.customizations });
  }
  if (res2) {
    return ({ prefix: `${s}-${c}-_`, customizations: res2.customizations });
  }
  if (res3) {
    return ({ prefix: `${s}-_-_`, customizations: res3.customizations });
  }
  return ({ prefix: 'default', customizations: [] });
};

export const getComponentJSXPath = ({ name, jsx: { prefix, customizations } }) => {
  // if no customizations at all exist for the app conditions
  if (prefix === 'default') return prefix;
  const c = find(({ componentName }) => componentName === name)(customizations);
  // if component has no customizations then its jsx is default
  if (!c) return 'default';
  // returns component file path based on the app conditions
  return prefix;
};
