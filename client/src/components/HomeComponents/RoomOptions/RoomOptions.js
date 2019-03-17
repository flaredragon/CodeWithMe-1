import React,{Component} from "react" 
import {Button} from "react-bootstrap"
import { withRouter } from 'react-router-dom';

class roomOptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            roomId:null,            
        }
    }
    
    navigateToRoom = (e) => {
        this.props.history.push(`/rooms/${this.state.roomId}`);
    }

    setRoomId = (e) => {
        this.setState({roomId:e.target.value});
    }

    render () {
        return (
        <React.Fragment>    
        <div className="paddings">
            <Button className="btn-lg" bsStyle="primary" onClick={this.props.newRoomClicked}>Get a New Room</Button>
            {/* <Link to='/new_room'>new room</Link> */}
        </div>
        <h3>OR</h3>
        <div className="paddings">
            Enter Existing Rooms
            <form onSubmit={this.navigateToRoom}>
                <input onChange={this.setRoomId} className="rounding selectingmore2" type="text"/>
                <button type="submit" className="btn btn-lg btn-primary">Enter Room</button>
            </form>
        </div>
        </React.Fragment>    
        );
    }
} 


export default withRouter(roomOptions);