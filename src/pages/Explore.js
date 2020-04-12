import React from 'react'
import './styles/Explore.css'
import RestaurantList from '../components/RestaurantList'

class Explore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
          };    
    }
    componentDidMount(){
        // console.log(3)
        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [              {
                    id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                    Name: 'Crepes & Waffles',
                    imgUrl:
                    'https://www.catalogodavipuntos.com/3660-tm_thickbox_default/bono-crepes-waffles-50000.jpg'
                },
                  {
                    id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                    Name: 'Wok',
                    imgUrl:
                    'https://www.parquelacolina.com/wp-content/uploads/2018/11/wok-logo.png'
                },
                  {
                    id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                    Name: 'Andres Carne de res',
                    imgUrl:
                    'https://lh3.googleusercontent.com/proxy/t_ngOJhFbVckgahPUPBCmyQJWkSZpyit_X3joXu_VXCF_K2pKTTmehjd5cunrS1SF2kH_hZKeVQ6OKADVdPac00T31BEsV8dk9K4OzMdbRZvdkK-O5GEedpIcfT71IU'
                },] 
            })
        }, 0);
    }
    componentDidUpdate(preprops, prestate){
        // console.log({
        //     preprops: preprops, 
        //     prestate: prestate})
        // console.log({
        //     props: this.props,
        //     state: this.state})
        
    }
    componentWillUnmount(){
        // console.log('se desmonto')
        clearTimeout(this.timeoutId)
    }
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="Explorer">
                    <h1 className="Page-title">Explore</h1>
                    <div className="restaurants">
                        <h2>Restaurants</h2>
                        <RestaurantList
                        restaurant={this.state.data}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Explore;


// class Badges extends React.Component{
    
//     constructor(props){
//         super(props)
//         console.log(1)
//         this.state = {
//             data: [],
//           };    
//     }
//     componentDidMount(){
//         console.log(3)
//         this.timeoutId = setTimeout(() => {
//             this.setState({
//                 data: [              {
//                     id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
//                     firstName: 'David',
//                     lastName: 'Sequera',
//                     email: 'davidsequerads@gmail.com',
//                     jobTitle: 'CEO LineApp',
//                     instagram: '_zekezeus_',
//                     avatarUrl:
//                       'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
//                   },
//                   {
//                     id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
//                     firstName: 'Major',
//                     lastName: 'Rodriguez',
//                     email: 'Ilene66@hotmail.com',
//                     jobTitle: 'Human Research Architect',
//                     instagram: 'MajorRodriguez61545',
//                     avatarUrl:
//                       'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
//                   },
//                   {
//                     id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
//                     firstName: 'Daphney',
//                     lastName: 'Torphy',
//                     email: 'Ron61@hotmail.com',
//                     jobTitle: 'National Markets Officer',
//                     instagram: 'DaphneyTorphy96105',
//                     avatarUrl:
//                       'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
//                   },] 
//             })
//         }, 2000);
//     }
//     componentDidUpdate(preprops, prestate){
//         console.log({
//             preprops: preprops, 
//             prestate: prestate})
//         console.log({
//             props: this.props,
//             state: this.state})
        
//     }
//     componentWillUnmount(){
//         console.log('se desmonto')
//         clearTimeout(this.timeoutId)
//     }
//     render(){
//         console.log(2)
//         return(
//             <React.Fragment>
//                 <div className="Badges">
//                     <div className="Badges__hero">
//                         <div className="Badges_container">
//                             <img className="Badges_conf-logo"
//                             src={confLogo}
//                             alt="Conf Logo"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="Badges__container">
//                     <div className="Badges__buttons">
//                         <Link to="/badges/new" className="btn btn-primary">
//                             New Badge
//                         </Link>
//                     </div>
//                     <div className="Badges__list">
//                         <BadgeList
//                         Badges={this.state.data}
//                         />
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default Badges;