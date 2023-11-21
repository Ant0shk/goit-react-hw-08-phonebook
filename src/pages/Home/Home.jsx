import React from 'react';
import { Title, WrapperHP } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectLogin, selectUser } from 'redux/selectors';

const Home = () => {
  const isLogin = useSelector(selectLogin);
  const { name } = useSelector(selectUser);
  return isLogin ? (
    <WrapperHP>
      <Title>
        {name}, welcome on the Home page of the Contactville website!
      </Title>
    </WrapperHP>
  ) : (
    <>
      <Title>Welcome to the contact book!</Title>
    </>
  );
};
export default Home;
