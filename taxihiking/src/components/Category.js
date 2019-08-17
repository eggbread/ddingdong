import React , { Component } from 'react';
import { BrowserRouter as withRouter,Link} from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import './Category.css';



class Category extends Component{
    render(){ 
        return(
          <div id="listWrapper">
            <div id="list">
                <div><Link to={"/list/koreanfood/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">한식</div><img className="categoryImg" src={require("../asset/images/koreanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></div>
                <div><Link to={"/list/westfood/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">양식</div><img className="categoryImg" src={require("../asset/images/westfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></div>
                <div><Link to={"/list/japanfood/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">일식</div><img className="categoryImg" src={require("../asset/images/japanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></div>
                <div><Link to={"/list/chinafood/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">중식</div><img className="categoryImg" src={require("../asset/images/chinafood.jpg")} alt="" height="100%" width="100%"></img></div></Link></div>

                <div><Link to={"/list/chicken/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">치킨</div><img className="categoryImg" src={require("../asset/images/chicken.png")} alt="" height="100%" width="100%"></img></div></Link></div>
                <div><Link to={"/list/pizza/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">피자</div><img className="categoryImg" src={require("../asset/images/pizza.jpg")} alt="" height="100%" width="100%"></img></div></Link></div>
                <div><Link to={"/list/pigfoot/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">족발&보쌈</div><img className="categoryImg" src={require("../asset/images/pigfoot.jpg")} alt="" height="100%" width="100%"></img></div></Link></div>
                <div><Link to={"/list/boon/"} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">분식</div><img className="categoryImg" src={require("../asset/images/boon.jpg")} alt="" height="100%" width="100%"></img></div></Link></div>
            </div>
          </div>
            // <div id="list">
            // <Grid>
            //   <Grid.Row columns={4}>
            //     <Grid.Column>
            //       <Link to={"/list/koreanfood/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">한식</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/koreanfood.jpg")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //     <Grid.Column>
            //       <Link to={"/list/westfood/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">양식</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/westfood.jpg")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //     <Grid.Column>
            //       <Link to={"/list/japanfood/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">일식</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/japanfood.jpg")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //     <Grid.Column>
            //       <Link to={"/list/chinafood/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">중식</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/chinafood.jpg")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //   </Grid.Row>
            //   <Grid.Row columns={4}>
            //     <Grid.Column>
            //       <Link to={"/list/chicken/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">치킨</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/chicken.png")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //     <Grid.Column>
            //       <Link to={"/list/pizza/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">피자</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/pizza.jpg")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //     <Grid.Column>
            //       <Link to={"/list/pigfoot/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">족발&보쌈</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/pigfoot.jpg")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //     <Grid.Column>
            //       <Link to={"/list/boon/"} className="categoryInner"><div className="categoryWrapper"><div className="categoryText">분식</div><Image className="categoryImg" style={{maxWidth: "260px", maxHeight: "260px"}} src={require("../asset/images/boon.jpg")} alt=""></Image></div></Link>
            //     </Grid.Column>
            //   </Grid.Row>
            // </Grid>
            

            //     {/* <table className="category">
            //         <thead>
            //             <tr>
            //                 <td colSpan="4">Menu List</td>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr>
            //                 <td><Link to={"/list/koreanfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">한식</div><img className="categoryImg" src={require("../asset/images/koreanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //                 <td><Link to={"/list/westfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">양식</div><img className="categoryImg" src={require("../asset/images/westfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //                 <td><Link to={"/list/japanfood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">일식</div><img className="categoryImg" src={require("../asset/images/japanfood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //                 <td><Link to={"/list/chinafood/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">중식</div><img className="categoryImg" src={require("../asset/images/chinafood.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //             </tr>
            //             <tr>
            //                 <td><Link to={"/list/chicken/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">치킨</div><img className="categoryImg" src={require("../asset/images/chicken.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //                 <td><Link to={"/list/pizza/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">피자</div><img className="categoryImg" src={require("../asset/images/pizza.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //                 <td><Link to={"/list/pigfoot/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">족발&보쌈</div><img className="categoryImg" src={require("../asset/images/pigfoot.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //                 <td><Link to={"/list/boon/"+window.sessionStorage.getItem('location')} className="categoryInner"><div height="100%" className="categoryWrapper"><div className="categoryText">분식</div><img className="categoryImg" src={require("../asset/images/boon.jpg")} alt="" height="100%" width="100%"></img></div></Link></td>
            //             </tr>
            //         </tbody>
            //     </table> */}
            //     {/* {componentLogin} */}
            //     {/* <Link to="/signin">사장님 로그인</Link> */}
            // </div>
        );
    }
}


export default Category;