import { Component, OnInit } from '@angular/core';
import { connectHits } from 'instantsearch.js/es/connectors';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { InstantSearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'hits',
  templateUrl: 'hits.html'
})
export class HitsComponent implements OnInit {
  // Define how your component state will look like,
  // and intialize it with an empty hits array
  state: { hits: {}[] } = { hits: [] };

  constructor(private instantSearchService: InstantSearchService) {}

  ngOnInit() {
    // Create a widget which will call `this.updateState` whenever
    // something changes on the search state itself
this.instantSearchService.search.client.clearCache();
    const widget = connectHits(this.updateState);

    // Register the Hits widget into the instantSearchService search instance.
    this.instantSearchService.search.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve().then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }
}
