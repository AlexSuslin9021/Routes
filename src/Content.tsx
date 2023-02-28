import React from 'react';
import {Propstype} from "./state/dataState";

type ContentType={
    pages:Propstype
}
export const Content = (props:ContentType) => {
    return (
        <div>
            <h3> {props.pages.price}</h3>
            <div> {props.pages.item}</div>
        </div>
    );
};

