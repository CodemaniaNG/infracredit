import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

const LoaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeDots color="#12326C" height="20" width="50" />
    </LoaderStyled>
  );
};

export default Loader;
