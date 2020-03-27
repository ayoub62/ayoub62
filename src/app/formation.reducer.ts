import { Action, createReducer, on } from '@ngrx/store';
import * as FormationActions from './formation.action';
import Formation from './formation.model';
import FormationState, { initializeState } from './formation.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(FormationActions.GetFormationAction, state => state),
  on(FormationActions.SuccessGetFormationAction, (state: FormationState, { payload }) => {
    return { ...state, Formations: payload };
  })
);

export function FormationReducer(state: FormationState | undefined, action: Action) {
  return reducer(state, action);
}
