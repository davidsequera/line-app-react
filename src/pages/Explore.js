import React from 'react'
import './styles/Explore.css'
import RestaurantList from '../components/RestaurantList'

class Explore extends React.Component{
    constructor(props){
        super(props)
        console.log(1)
        this.state = {
            data: [],
          };    
    }
    componentDidMount(){
        console.log(3)
        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [              {
                    id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                    Name: 'Crepes & Waffles',
                    imgUrl:
                    'https://instagram.fbog2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/69621607_496699594487582_8129503935976177664_n.jpg?_nc_ht=instagram.fbog2-2.fna.fbcdn.net&_nc_ohc=OfEOkbPnbqwAX9iZfgW&oh=90e901d2dc912fb8beb52b2eb69229da&oe=5E8AF631'
                },
                  {
                    id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                    Name: 'Wok',
                    imgUrl:
                    'https://instagram.fbog2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/64649395_500178434055100_643862941094903808_n.jpg?_nc_ht=instagram.fbog2-2.fna.fbcdn.net&_nc_ohc=7TAPObxzM88AX_JcxCW&oh=ae804fe921269dc56ef3ac9dfbe7a160&oe=5E88C4AC'
                },
                  {
                    id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                    Name: 'Andres Carne de res',
                    imgUrl:
                    'https://instagram.fbog2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/60868025_443830029525661_7274070678247047168_n.jpg?_nc_ht=instagram.fbog2-2.fna.fbcdn.net&_nc_ohc=i7N5ynmsAF8AX9NpIxZ&oh=0a83172ad6fc9e9a50308fdbbc3bcd5e&oe=5E80D144'
                },] 
            })
        }, 0);
    }
    componentDidUpdate(preprops, prestate){
        console.log({
            preprops: preprops, 
            prestate: prestate})
        console.log({
            props: this.props,
            state: this.state})
        
    }
    componentWillUnmount(){
        console.log('se desmonto')
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