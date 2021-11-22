import React from 'react';
import CalendarCmp from '../Components/CalendarCmp/Container';
import MapCmp from '../Components/MapCmp/Container';
import { MainContainer } from '../Styles/global';

const MainPage = () => {
  return (
    <>
      <MainContainer>
        <CalendarCmp />
        <MapCmp />
      </MainContainer>
    </>
  );
};

export default MainPage;
