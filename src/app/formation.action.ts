import { createAction, props } from '@ngrx/store';
import Formation from './formation.model';

export const GetFormationAction = createAction('[Formation] - Get Formation');

export const BeginGetFormationAction = createAction('[Formation] - Begin Get Formation');

export const SuccessGetFormationAction = createAction(
  '[Formation] - Success Get Formation',
  props<{ payload: Formation[] }>()
);
