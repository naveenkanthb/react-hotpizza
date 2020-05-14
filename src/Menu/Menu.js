import React from 'react'
import styled from 'styled-components'
import {foods} from '../Data/FoodData'
import {Food,FoodGrid,FoodLabel} from '../Menu/FoodGrid'

export default function Menu({setOpenFood}) {
    return (
        <MenuStyled>
        {Object.entries(foods).map(([sectionName, foods]) => (
            <>
            <h1> {sectionName} </h1>
            <FoodGrid>
                {foods.map(food => (
                <Food
                    img={food.img}
                    onClick={() => setOpenFood(food.name)}
                >
                    <FoodLabel>
                    <div>{food.name}</div>
                    </FoodLabel>
                </Food>
                ))}
            </FoodGrid>
            </>
        ))}
    </MenuStyled>
    );
}

const MenuStyled = styled.div`
height:1000px;
margin:0px 400px 50px 20px;



`
