import { NavLink } from "react-router-dom";
function Header()
{
return <>
  <div className="div">
        <p className="p">+1(234) 567 89 00</p>
      </div>
      <div className="div1">
<p className="p1"> 2024 chestnutst,columbia,SC 29204</p>
      </div>

      <div className="div2">
        <img src="/cl.png" className="img2"/>
      </div>

      <div className="div3">
         <div>
      <NavLink to="https://www.google.com/imgres?imgurl=https://res2.weblium.site/site/5f11c251f3d5980022ea4aa2/preview1600_1000&tbnid=6cYR8izyYM-1CM&vet=1&imgrefurl=https://weblium.com/templates/college-website-design-229&docid=77n9MvGiBiTkDM&w=1600&h=1000&hl=en-IN&source=sh/x/im/m1/4&kgs=c4af8d505cfeab93&shem=isst,shrtsdl&utm_source=isst,shrtsdl,sh/x/im/m1/4" className="y">HOME</NavLink> 
      <NavLink to="/a" className="y1">  About</NavLink> 
      <NavLink to="https://weblium.com/templates/demo/college-website-design-229"className="y2">Contact</NavLink> 
      <NavLink to="/c" className="y3">Logout</NavLink> 
      <NavLink to="https://weblium.com/templates/college-website-design-229" className="y4">Admission</NavLink>
      <button className="bu2">
        <a href="https://weblium.com/templates/college-website-design-229"  style={{textDecoration:"none", color:"white"}}>Contact Us</a>

      </button>
    </div>
      </div></>
}

export default Header;