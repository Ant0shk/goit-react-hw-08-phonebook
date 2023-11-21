import React from 'react';
import { StyledHomeText, Title, WrapperHP } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectLogin, selectUser } from 'redux/selectors';

const Home = () => {
  const isLogin = useSelector(selectLogin);
  const { name } = useSelector(selectUser);
  return isLogin ? (
    <WrapperHP>
      
    </WrapperHP>
  ) : (
    <>
      
    </>
  );
};
export default Home;
