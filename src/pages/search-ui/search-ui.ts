import { Component, OnInit } from '@angular/core';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { HitsComponent } from '../hits/hits';
import { InstantSearchService } from '../../services/instantsearch.service';

@Component({
  selector: 'search-ui',
  templateUrl: 'search-ui.component.html'
})

export class SearchUiComponent implements OnInit {


  state: { query: string; refine: Function } = {
    query: '',
    refine() {}
  };



  constructor(private instantSearchService: InstantSearchService) {}

  ngOnInit() {
    const widget = connectSearchBox(this.updateState);
    this.instantSearchService.search.addWidget(widget());
  }

  updateState = (state, isFirstRendering) => {
    // asynchronous update of the state
    // avoid `ExpressionChangedAfterItHasBeenCheckedError`
    if (isFirstRendering) {
      return Promise.resolve(null).then(() => {
        this.state = state;
      });
    }

    this.state = state;
  }

handleChange(query) {
//alert("in handleChange "+query);
  this.state.refine(query)
}

} 