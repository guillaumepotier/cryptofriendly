var search = instantsearch({
  appId: config.appId,
  apiKey: config.searchApiKey,
  indexName: config.index,
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

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
      console.log(hit)

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
