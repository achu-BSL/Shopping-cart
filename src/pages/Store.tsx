import React from "react"
import {Row, Col} from 'react-bootstrap';
import { StoreItem } from "../components/StoreItem";

import storeItems from '../data/items.json';


export const Store: React.FC = () => {
    return (
        <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="gap-3">
        {storeItems.map(item => (
            <Col key={item.id}>
            <StoreItem {...item}/>
            </Col>
        ))}
    </Row>
        </>
    )
    ;
}