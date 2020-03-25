/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/normalize.scss';
import './src/styles/animate.css';
import './src/styles/general.scss';
import CustomLayout from './wrapPageElement';

// export const onClientEntry = () => {
//   if (typeof window.IntersectionObserver === `undefined`) {
//     import(`intersection-observer`);
//   }
// };

export const wrapPageElement = CustomLayout;
// export const onServiceWorkerUpdateReady = () => window.location.reload(true)
