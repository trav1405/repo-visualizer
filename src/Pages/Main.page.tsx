import React from 'react';
import { Tree } from "./Tree"
import { Box, Button, TextField } from '@material-ui/core';
import { FileType } from '../utils/types';

export const MainPage: React.FC = () => {
  /*
  const { treeData, maxDepth, colorEncoding } = useSelector(
    (state: ApplicationState) => state.tree
  );
  */

  const [treeData, setTreeData] = React.useState<FileType | null>(null);
  const [maxDepth, setMaxDepth] = React.useState<number>(9);
  const [colorEncoding, setColorEncoding] = React.useState<'type' | 'number-of-changes' | 'last-change'>('type')

  const [repo, setRepo] = React.useState('');

  const handleButtonPress = React.useCallback(() => {
    console.log(repo)
  }, [repo])
  
  const handleChange = React.useCallback((event: any) => {
    setRepo(event.target.value)
  }, [setRepo])

  return (
      <Box>
        <Box>
          <TextField label={'repo'} value={repo} onChange={handleChange}></TextField>
          <Button onClick={handleButtonPress}>{'Generate'}</Button>
        </Box>
        <Tree data={treeData} maxDepth={+maxDepth} colorEncoding={colorEncoding} />
      </Box>
  )
}

export default MainPage;
