import { applyMiddleware, combineReducers, createStore, Middleware, Reducer } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from 'redux-thunk';
import treeReducer, { initialState as treeInitial, TreeState } from './Tree.reducer';

export interface ApplicationState {
  tree: TreeState
}

const appReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  tree: treeReducer
})

const emptyState: ApplicationState = {
  tree: treeInitial
}

const rootReducer: Reducer<ApplicationState> = (state, action) => appReducer(state, action);

// Init store
export const initStore = (initialState = emptyState) => {
  const middlewares: [Middleware] = [reduxThunk];
  // Client side logger
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};