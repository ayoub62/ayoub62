import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as FormationActions from './formation.action';
import Formation from './formation.model';

@Injectable()
export class FormationEffects {
  constructor(private http: HttpClient, private action$: Actions) {
  }

  private ApiURL = 'http://localhost:1337/formations';

  GetFormations: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(FormationActions.BeginGetFormationAction),
      mergeMap(action =>
        this.http.get(this.ApiURL).pipe(
          map((data: Formation[]) => {
            return FormationActions.SuccessGetFormationAction({payload: data});
          })
        )
      )
    )
  );
}
