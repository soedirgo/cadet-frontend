import { Reducer } from 'redux';

import { defaultPlayground } from '../../commons/application/ApplicationTypes';
import { SourceActionType } from '../../commons/utils/ActionsHelper';
import {
  CHANGE_QUERY_STRING,
  PLAYGROUND_UPDATE_GITHUB_FILE,
  PLAYGROUND_UPDATE_PERSISTENCE_FILE,
  PlaygroundState,
  TOGGLE_USING_SUBST,
  UPDATE_SHORT_URL
} from './PlaygroundTypes';

export const PlaygroundReducer: Reducer<PlaygroundState> = (
  state = defaultPlayground,
  action: SourceActionType
) => {
  switch (action.type) {
    case CHANGE_QUERY_STRING:
      return {
        ...state,
        queryString: action.payload
      };
    case TOGGLE_USING_SUBST:
      return {
        ...state,
        usingSubst: action.payload
      };
    case UPDATE_SHORT_URL:
      return {
        ...state,
        shortURL: action.payload
      };
    case PLAYGROUND_UPDATE_PERSISTENCE_FILE:
      return {
        ...state,
        persistenceFile: action.payload
      };
    case PLAYGROUND_UPDATE_GITHUB_FILE:
      return {
        ...state,
        githubFile: action.payload
      };
    default:
      return state;
  }
};
