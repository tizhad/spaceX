import React, { lazy, Suspense } from 'react';

const LazyLaunchDetail = lazy(() => import('./LaunchDetail'));

const LaunchDetail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLaunchDetail {...props} />
  </Suspense>
);

export default LaunchDetail;
