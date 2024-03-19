import React from 'react'
import { MobileAndTablet } from 'styling/breakpoints';
import HeaderLeft from './left';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem .6rem;
  background-color: #000080;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 85px;
  box-shadow: 0px 5px 25px rgba(19,85,109,0.4);
`;

export default function MobileHeader() {
    return (
        <MobileAndTablet>
            <HeaderStyle>
                <HeaderLeft />
            </HeaderStyle>
        </MobileAndTablet>
    )
}
