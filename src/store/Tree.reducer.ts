import { FileType } from '../utils/types';
import { TreeAction, ETreeActionTypes } from './Tree.actions';

export interface TreeState {
  treeData: FileType | null;
  maxDepth: number;
  colorEncoding: 'type' | 'number-of-changes' | 'last-change'
}

export const initialState: TreeState = {
  treeData: null,
  maxDepth: 9,
  colorEncoding: 'type'
};

export default function (state: TreeState = initialState, action: TreeAction) {
  switch (action.type) {
    case ETreeActionTypes.SET_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
