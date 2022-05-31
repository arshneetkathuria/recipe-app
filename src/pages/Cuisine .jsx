import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
function Cuisine() { 
   const [ cuisine, setCuisine ]=useState([]);
    let params = useParams();
    const getCuisine = async(name) => {
        var data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        console.log(recipes.results);
        setCuisine(recipes.results);
     }

    useEffect(() => {
        getCuisine(params.type);
        console.log(params);
    }, [params.type]);
    return ( <Grid  animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{duartion:0.5}}>{
        cuisine.map((item) => {
           
            return (<Card key={item.id}>
                 <Link to={'/recipe/'+item.id}>
                <img src={item.image} alt={item.title}></img>
                    <h4>{item.title}</h4>
                    </Link>
            </Card>);
       })} </Grid>
    );
}

const Grid = styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
grid-gap:2rem;
`;

const Card = styled.div`
img{
    width:100%;
    border-radius:2rem;
}
a
{
    text-decoration:none;
}
h4
{  
    font-weight:300;
    text-align:center;
    padding:1rem;
}
`;


export default Cuisine;