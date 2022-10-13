import { ActionType } from '../action-types'

//액션 인터페이스
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction{
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction{
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

//액션 타입
export type Action = SearchRepositoriesAction | SearchRepositoriesErrorAction | SearchRepositoriesSuccessAction 
