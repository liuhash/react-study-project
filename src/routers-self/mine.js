import React, {Component} from 'react';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import Rank from "./Rank";
import SongList from "./songList";

class Mine extends Component {
    render() {
        return (
                <div>
                    <HashRouter>
                    我的音乐
                    <ul>
                        <li><Link to="/my/rank">排行榜</Link></li>
                        <li><Link to="/my/songList">歌单</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/my/rank" element={<Rank/>}></Route>
                        <Route path="/my/songList" element={<SongList/>}></Route>
                    </Routes>
                    </HashRouter>
                </div>
        );
    }
}

export default Mine;