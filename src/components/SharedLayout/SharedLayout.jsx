import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { StyledMain } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default SharedLayout;
