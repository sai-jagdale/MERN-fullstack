import React from 'react';

class Counter extends React.Component{

    // states are introduced since props are 
    // read-only and cannot be changed
    // so the value of props is stored 
    // in stated and then changed using setState method
    constructor(props){
        super(props);
        this.state={ count:props.count }
    }

    render(){
        return(
            <div>
                <button onClick={()=>{
                    //this.props.count=this.props.count-1;
                    //console.log("dislike");
                    
                    this.setState({count:this.state.count-1});
                    this.props.handler(this.state.count-1);

                }}>-</button>

                {/* here the value comens from the likes 
                value that is associated with the product */}
                <input value={this.state.count} type="text"/>
                
                {/* Properties(props) are ready only 
                they cannot be changed */}

                <button onClick={()=>{
                    //this.props.count=this.props.count+1;
                    //console.log("like");
                    
                    this.setState({count:this.state.count+1});
                    this.props.handler(this.state.count+1);

                }}>+</button>
            </div>
        )
    }
}

export default Counter;