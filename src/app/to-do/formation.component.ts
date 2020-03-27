import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import * as FormationsActions from '../formation.action';
import Formation from '../formation.model';
import FormationState from '../formation.state';

@Component({
  selector: 'app-formations',
  templateUrl: './formation.component.html'
})
export class FormationComponent implements OnInit {
  constructor(private store: Store<any>) {
    this.formations = store.pipe(select('formations'));
  }

  formations: Observable<FormationState>;
  FormationSubscription: Subscription;
  formationsList: Formation[] = [];

  ngOnInit() {
    this.FormationSubscription = this.formations
      .pipe(
        map(x => {
          this.formationsList = x.Formations;
        })
      )
      .subscribe();

    this.store.dispatch(FormationsActions.BeginGetFormationAction());
  }

}
