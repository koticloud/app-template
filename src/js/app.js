import init from './init.js';

// Main app code
import { Navigator } from '../../../sdk/v0.4.x/sdk.js';
import { PageRenderer } from '../../../sdk/v0.4.x/js-components.js';
import { PageLink } from '../../../sdk/v0.4.x/js-components.js';

import pages from '../js/pages.js';

Navigator.setPages(pages);
Navigator.goTo('home');

window.customElements.define('sdk-page-renderer', PageRenderer);
window.customElements.define('sdk-page-link', PageLink);