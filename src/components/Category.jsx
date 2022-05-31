import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category() {

    return (<List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
            </Slink>
        <Slink to={'/cuisine/Chinese'}>
            <GiNoodles/>
            <h4>Chinese</h4>
            </Slink>
        <Slink to={'/cuisine/Indian'}>
            <GiChopsticks />
            <h4>Japanese</h4>
            </Slink>
    </List>);
}
 



const List = styled.div`
display:flex;
flex:1;
margin:2rem 0rem;
flex-direction:row;
justify-content:center;
align-items:center";
`;


const Slink = styled(NavLink)
    `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:pink;
    margin-right:2rem;
    border-radius:50%;
    text-decoration:none;
    background:linear-gradient(35deg, #494949,#313131);
    width:4rem;
    height:4rem;
    cursor:pointer;
    transfrom:scale(0.8);

    h4
    {
        color:white;
        font-size:0.8rem;
    }
    svg
    {
        color:white;
        font-size:1.5rem;
    }
    &.active{
        background:linear-gradient(to right,#f27121,#e94057);
    }
    `;

export default Category;

