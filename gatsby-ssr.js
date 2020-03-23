/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import './src/styles/normalize.scss';
import './src/styles/animate.css';
import './src/styles/general.scss';
import CustomLayout from './wrapPageElement';

export const wrapPageElement = CustomLayout;
