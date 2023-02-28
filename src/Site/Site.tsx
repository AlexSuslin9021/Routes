import React from 'react';
import s from './site.module.css'
import {NavLink, Route, Routes,Navigate} from "react-router-dom";
import dataState from "../state/dataState";
import Pages from "../Pages";
import {Error} from "../Error";

export const Site = () => {
    return (
        <>
            <div className={s.header}>
                Routes
            </div>
            <div className={s.body}>
                <div className={s.menu}>
                    <div><NavLink className={({isActive})=>isActive ? s.active: s.nav}  to={'/path/0'}>1</NavLink> </div>
                    <div><NavLink className={({isActive})=>isActive ? s.active: s.nav}  to={'/path/1'}>2</NavLink> </div>
                    <div><NavLink className={({isActive})=>isActive ? s.active: s.nav} to={'/path/2'}>3</NavLink> </div>
                    <div><NavLink className={({isActive})=>isActive ? s.active: s.nav} to={'/path/3'}>4</NavLink> </div>
                </div>

                <div className={s.content}>
                  <Routes>
                      <Route path={'/'} element={<Navigate to={'/path0'}/>}></Route>
                        <Route path={'/path/:id'} element={<Pages data={dataState.pages}  />}></Route>
                        <Route path={'/*'} element={<Error/>} ></Route>
                  </Routes>
                </div>
            </div>
        </>

    );
};

export default Site;