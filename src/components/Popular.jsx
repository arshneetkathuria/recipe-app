import styled from 'styled-components';
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';


function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem('popular');
        if (check) {
            setPopular(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data);
        }
    }
    return (

        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{ perPage: 4, arrows: false, pagination: false, drag: 'free', gap: '18rem' }}>
                {
                    popular.map((recipe) => {
                        return (<SplideSlide key={recipe.id}>
                            <Card key={recipe.id}>
                            <Link to={'/recipe/'+recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}></img>
                                    <Gradient />
                                    </Link>
                            </Card>
                        </SplideSlide>);
                    })
                }
            </Splide>
        
        </Wrapper>
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
margin: 0rem 2rem;
`;

const Card = styled.div`
height: 15rem;
width:17rem;
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




export default Popular;