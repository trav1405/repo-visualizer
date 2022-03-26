import { ActionCreator } from 'redux';
import { TreeState } from './Tree.reducer';

export enum ETreeActionTypes {
  SET_DATA = 'TREE_SET_DATA'
}

interface TreeSetDataAction {
  type: ETreeActionTypes.SET_DATA;
  data: TreeState;
}

export type TreeAction = TreeSetDataAction;

export const setTreeData =
  (data: Partial<TreeState>) => (dispatch: ActionCreator<TreeAction>) => {
    dispatch({
      data,
      type: ETreeActionTypes.SET_DATA
    });
  };
