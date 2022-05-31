import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

import '@splidejs/react-splide/css';

function Veggie() {
    const [veggies, setVeggies] = useState([]);
    useEffect(() => {
        getVeggies();
    }, []);

    const getVeggies = async () => {
        const check = localStorage.getItem('veggies');
        if (check) {
            setVeggies(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggies', JSON.stringify(data.recipes));
            setVeggies(data.recipes);
            console.log(data);
        }
    }
    return (
        <div>
           
            <Wrapper>
                <h3>Vegetarian Picks</h3>
                <Splide options={{ perPage: 3, arrows: false, pagination: false, drag: 'free', gap: '15rem' }}>
                    {
                        veggies.map((recipe) => {
                            return (<SplideSlide key={recipe.id}>
                            <Link to={'/recipe/'+recipe.id}>

                                <Card key={recipe.id}>
                                    <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}></img>
                                      
                                    <Gradient />
                                    </Card>
                                    </Link>
                            </SplideSlide>);
                        })
                    }
                </Splide>
        
            </Wrapper>
        </div>
    );
}
    const Gradient = styled.div`
    z-index:3;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.7));
    position:absolute;
    `;
    
    const Wrapper = styled.div`
    margin: 4rem 4rem;
    `;
    
    const Card = styled.div`
    height: 16rem;
    width:20rem;
    border-radius: 2rem;
    overflow: hidden;
    position:relative;
    
    img
    {   
        object-fit:cover;
        border-radius: 2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        cursor: pointer;
    }
    
    p
    {
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        color: white;
        width:100%;
        text-align:center;
        font-weight:100;
        font-size: 1rem;
        height: 40%;
        display:flex;
        justify-content: center;
        align-items: center;
        transform:translate(-50%,0%);
    }
    `;


export default Veggie;