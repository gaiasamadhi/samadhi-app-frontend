import React from 'react';

import PageHeader from '../components/PageHeader';
import LevelSelectionContent from '../components/LevelSelectionContent';
import PageFooter from '../components/PageFooter';

const LevelSelection = () => {
  return (
        <div className='level-selection'>
          <PageHeader title={''}/>
          <LevelSelectionContent
            banner={'please choose one of the following paths'}
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />
          <PageFooter footer={'License GPL Version 2'}/>
        </div>
  )
}

export default LevelSelection;
