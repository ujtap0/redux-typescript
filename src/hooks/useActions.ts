import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  //first arguments: an object containing a bunch of different actionCreators => one action creator of search repositories inside of it
  //second argument: dispatch function
  // bindActionCreators is going to give us back an objects that contains all the different action creators that we provided in as the first argument
  //whenever we call these bindActionCreators it returns value from them will be automatically taken and provided to dispatch
  return bindActionCreators(actionCreators, dispatch)
  // {searchRepositories: dispatch(searchRepositories)}
};