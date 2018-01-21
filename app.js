var search = instantsearch({
  appId: config.appId,
  apiKey: config.searchApiKey,
  indexName: config.index,
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

Array.prototype.pluck = function (key) {
  return this.map(function(object) { return object[key]; });
};

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search',
    placeholder: 'Search anything (country, coin name, e-commerce category...)',
    poweredBy: true,
    reset: true,
    cssClasses: {
      root: 'form-root',
      input: 'form-control form-control-lg'
    }
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: document.getElementById('no_results_template').innerHTML,
      item: document.getElementById('hit_template').innerHTML
    },
    transformData: function (hit) {
      hit.hasLink = hit.url.length

      hit._highlightResult.categories = hit._highlightResult.categories.pluck('value').join(', ');
      hit._highlightResult.allowed_currencies = hit._highlightResult.allowed_currencies.pluck('value').join(', ');

      return hit
    }
  })
);

// initialize pagination
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#refinement-list',
    attributeName: 'categories'
  })
);

search.start();
