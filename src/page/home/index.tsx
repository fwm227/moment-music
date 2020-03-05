import * as React from 'react';
import AppHeader from '../../component/header';
import AppFooter from '../../component/footer';
import {Route, Switch} from 'react-router-dom';
import Recommend from '../../container/recommend/index';
import Rank from '../../page/rank';
import LeftSide from '../../component/left-side';
import PlaylistDetail from '../../container/playlist-detail'
import './style.pcss';
import {curSongInfo} from '../../types/index';
interface Props {
  curSongInfo: curSongInfo,
  playMusic: Function,
  stopMusic: Function
}
export default function Home({curSongInfo, stopMusic, playMusic}: Props) {
  return (
    <div className="home">
      <AppHeader></AppHeader>
      <main className="app-main">
        <LeftSide curSongInfo={curSongInfo}></LeftSide>
          <article className="container">
            <Switch>
              <Route path="/recommend" component={Recommend}></Route>
              <Route path="/rank" component={Rank}></Route>
              <Route path="/playlist-detail" component={PlaylistDetail}></Route>
            </Switch>
          </article>
      </main>
      <AppFooter status={curSongInfo.status} stopMusic={stopMusic} playMusic={playMusic}></AppFooter>
    </div>
  )
};
