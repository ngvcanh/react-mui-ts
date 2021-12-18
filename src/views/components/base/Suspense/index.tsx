import { FC, Suspense as ReactSuspense, ReactNode } from 'react';
import Loading from '../Loading';

export interface SuspenseProps{
  fallback?: ReactNode;
}

const Suspense: FC<SuspenseProps> = props => {

  const { children, fallback } = props;

  return <ReactSuspense fallback={ fallback ? fallback : <Loading /> }>
    { children }
  </ReactSuspense>

}

export default Suspense;