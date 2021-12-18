import { FC } from 'react';
import { BaseComponentProps } from 'types/Component';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


const Loading: FC<Partial<BaseComponentProps>> = props => {

  const { className, sx } = props;

  return <Box className={ className } sx={ sx }>
    <CircularProgress />
  </Box>

}

export default Loading;