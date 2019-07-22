import React from 'react';
import ListItem from "../List/ListItem/ListItem";

const OrderedList = () =>{
        return (
            <div>
                <h3> ordered List of foods</h3>
                <ol>
                    <ListItem>mexican food</ListItem>
                    <ListItem>BBQ pulled pork</ListItem>
                    <ListItem>sushi</ListItem>
                </ol>
            </div>
        );
}

export default OrderedList;