import React  from 'react';
import API from "../API";

class Main extends React.Component {

    componentDidMount(){
        API.fetchLinks();
    }

    render (){
        return(
            <div>
                <h3>Links</h3>
                <ul>
                    <li>Links...</li>
                    <li>Links...</li>
                </ul>
            </div>
        )
    }
}

export default Main;