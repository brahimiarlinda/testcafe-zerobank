/* End-to-End Test of the Search functionallity */

import Navbar from '../page-objects/components/Navbar';
import SearchResultsPage from '../page-objects/pages/SearchResultsPage';

const navbar = new Navbar();
const searchResultsPage = new SearchResultsPage();

// prettier-ignore
fixture`Search Test`
    .page`http://zero.webappsecurity.com/index.html`;

test('I can search for information via the search box', async t => {
    navbar.search('online bank');
    await t.expect(searchResultsPage.resultsTitle.exists).ok();
    await t.expect(navbar.searchBox.exists).ok();
});
