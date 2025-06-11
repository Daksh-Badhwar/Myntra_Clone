import HomeItem from "../components/HomeItem";
import {useSelector} from "react-redux";
const Home=()=>{
   const items =useSelector((store)=>store.items);
   //console.log(items)//to get array and check
return(
     <main>
        <div className="items-container">
         {items.map((item)=>(
          <HomeItem key ={item.id} item={item}/>))}
        </div>
    </main>
)
}
export default Home;