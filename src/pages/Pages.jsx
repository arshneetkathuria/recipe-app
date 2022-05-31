import Home from './Home'
import Recipe from './Recipe';
import Cuisine from './Cuisine ';
import Searched from './Searched';
import { Route, Routes} from "react-router-dom";

function Pages()
{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:dish" element={<Recipe/>}/>
        </Routes>
      
        
    );
}

export default Pages;