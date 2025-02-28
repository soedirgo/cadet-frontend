import { GitHubFile } from '../github/GitHubTypes';
import { PersistenceFile } from '../persistence/PersistenceTypes';

export const CHANGE_QUERY_STRING = 'CHANGE_QUERY_STRING';
export const GENERATE_LZ_STRING = 'GENERATE_LZ_STRING';
export const TOGGLE_USING_SUBST = 'TOGGLE_USING_SUBST';
export const SHORTEN_URL = 'SHORTEN_URL';
export const UPDATE_SHORT_URL = 'UPDATE_SHORT_URL';
export const PLAYGROUND_UPDATE_PERSISTENCE_FILE = 'PLAYGROUND_UPDATE_PERSISTENCE_FILE';
export const PLAYGROUND_UPDATE_GITHUB_FILE = 'PLAYGROUND_UPDATE_GITHUB_FILE';

export type PlaygroundState = {
  readonly queryString?: string;
  readonly shortURL?: string;
  readonly usingSubst: boolean;
  readonly persistenceFile?: PersistenceFile;
  readonly githubFile?: GitHubFile;
};
