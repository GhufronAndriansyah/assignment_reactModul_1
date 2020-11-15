import React, {Component} from 'react';  
import './App.css';  
import Media from './Components/Media'; 
// import element Alert yang telah dibuat  
  
class App extends Component {  
  render(){  
    return (  
      <div className="App container col-sm-6">  
        <Media image="002.jpg" title="React JS">  
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum  
                  in vulputate at, tempus viverra turpis  
        </Media>  
        <Media image="003.jpg" title="Angular JS">  
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum  
                  in vulputate at, tempus viverra turpis  
        </Media>  
      </div>  
    );
  }  
}  
  
export default App;  
