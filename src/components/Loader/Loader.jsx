import React from 'react';
import { Grid } from 'react-loader-spinner';
import { styled } from 'styled-components';
export const Loader = () => {
  return (
    <LoaderThumb>
      <Grid
        height="80"
        width="80"
        color="#a0a0a0"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderThumb>
  );
};
export const LoaderThumb = styled.div`
  /* display: flex;
  margin: 0 auto; */
`;
