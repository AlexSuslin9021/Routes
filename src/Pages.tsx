import React from 'react';
import {useParams} from "react-router-dom";
import {Propstype} from "./state/dataState";
import {Content} from "./Content";

type PropsPage={
    data:Propstype[]
}
const Pages = (props:PropsPage) => {
    let params=useParams()
    return (
        <div>
            <Content pages={props.data[Number(params.id)]}/>
        </div>
    );
};

export default Pages;