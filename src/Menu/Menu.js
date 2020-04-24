import React from 'react'
import styled from 'styled-components'
import {foodItems} from '../Data/FoodData'
import {Food,FoodGrid,FoodItem} from '../Menu/FoodGrid'

export default function Menu() {
    return (
        <MenuStyled>
            <h1>menu</h1>
            <FoodGrid>
                {foodItems.map(food => (
                    <Food img={food.img}>
                        <FoodItem>
                        {food.name}
                        </FoodItem>
                    </Food>
                ))}
            </FoodGrid>
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
height:1000px;
margin:0px 400px 50px 20px;



`
