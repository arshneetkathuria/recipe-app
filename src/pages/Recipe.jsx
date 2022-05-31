import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {
    const params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    const fetchDetails = async()=>
    {
        const data =await fetch(`https://api.spoonacular.com/recipes/${params.dish}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipe = await data.json();
        console.log(recipe);
        setDetails(recipe);
    }
    
    useEffect(() => {
        fetchDetails();
     },[params.dish])
    return (
        <DetailWrapper>
            <div>
                <h4>{details.title}</h4>
                <img src={details.image} alt={details.title}></img>
            </div>
            <Info>
                <ButtonWrapper>
                <Buttoon className={activeTab==='instructions'?'active':''} onClick={()=>setActiveTab('instructions')}>Instructions</Buttoon>
                <Buttoon className={activeTab==='ingredients'?'active':''}onClick={()=>setActiveTab('ingredients')}>Ingredients</Buttoon>
                </ButtonWrapper>
                    {activeTab === 'instructions' && (
                     <div>
                     <h3 dangerouslySetInnerHTML={{ __html: details.summary}}></h3>
                     <h3 dangerouslySetInnerHTML={{ __html: details.instructions}}></h3>
             </div> 
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient)=>(
                            <li>{ingredient.original}</li>
                        ))}
                 </ul>   
                )}
              
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;

img
{
    width:25rem;
    height:20rem;
    border-radius:1rem;
}
.active
{
    background:linear-gradient(35deg , #494949, #313131);
    color:white;
}
h4
{
    margin-bottom:2rem;
}
a{
    color:#313131;
 
}
h3
{ 
    margin-top:2rem;
    margin-bottom:2rem;
    font-weight:200;
    color:#313131;

}
li
{
    font-size:1rem;
    line-height:2.5rem;
    color:#313131;
}
ul
{
    margin-top:2rem;
}`;

const Buttoon = styled.button`
padding:1rem 2rem;
color: #313131;
background:white;
border:2px solid black;
height:50px;
margin-right: 2rem;
font-weight:600;
cursor:pointer;
`;
const Info = styled.div`
margin-left:10rem;
`;

const ButtonWrapper = styled.div`
display:flex;
margin-bottom:1rem;`;
export default Recipe;