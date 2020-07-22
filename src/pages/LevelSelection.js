import React from 'react';
import PageHeader from '../components/PageHeader';
import LevelSelectionContent from '../components/LevelSelectionContent';
import PageFooter from '../components/PageFooter';

const LevelSelection = () = {
  return (
    <div className='level-selection'>
    <PageHeader/>
    <LevelSelectionContent/>
    <PageFooter/>
    </div>

  )
}

export default LevelSelection;
