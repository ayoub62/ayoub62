import Formation from './formation.model';

export default class FormationState {
  Formations: Array<Formation>;
}

export const initializeState = (): FormationState => {
  return { Formations: Array<Formation>()};
};
