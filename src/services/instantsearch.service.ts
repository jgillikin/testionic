import { Injectable } from '@angular/core';
import instantsearch from 'instantsearch.js/es';

@Injectable()
export class InstantSearchService {
  search = instantsearch({
    appId: '1TOTVDG56H',
    apiKey: '326a9cdc9467528b4dc3398aae955fb4',
    indexName: 'contacts',
    urlSync: true
  });

  constructor() {}
}