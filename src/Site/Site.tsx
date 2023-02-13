import React from 'react';
import s from './site.module.css'

export const Site = () => {
    return (
        <>
            <div className={s.header}>
                Routes
            </div>
            <div className={s.body}>
                <div className={s.menu}>
                    <div> 1</div>
                    <div> 2</div>
                    <div> 3</div>
                    <div> 4</div>
                </div>

                <div className={s.content}>
                    content
                </div>
            </div>
        </>

    );
};

export default Site;