import * as React from 'react';
import AppHeader from '../../../component/common/app-header';
import LayoutMain from '../../../layout/layout-main';

class Recommend extends React.Component {
  render () {
    return (
      <div className="recommend">
        <AppHeader></AppHeader>
        <LayoutMain></LayoutMain>
      </div>
    )
  }
}

export default Recommend;