import axios from 'axios';
//type definition
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  // get a dispatch function can be called with some argument that matches Action
  return async(dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });
    try{
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',{
        params:{
          text: term
        }
      });

      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    }catch(err:any){
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
};