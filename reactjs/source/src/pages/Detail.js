// Detail page
import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
    /* #note: if else condition
	    render() {
			return <p>
			{
				chance.first() == 'John' 
				? 'Hello, John!'
				: 'Hello, world!'
			}
			</p>;
		} 
	*/

	/* #note: several elements in JSX
		render() {
		    return (<div>
		        <p>Hello, {chance.first()}.</p>
		        <p>He/She is from {chance.country({ full: true })}.</p>
		    </div>);
		}
	*/
	
	// constructor
	constructor(props) {
	    super(props);
		
		
		
		// khởi tạo 1 mảng danh sách thành viên
		const people = [];
		for (let i = 0; i < 10; i++) {
	        people.push({
	            name: chance.first(),
	            country: chance.country({ full: true })
	        });
	    }
		this.state = { people };
		
	    /* this.state = {
	        name: chance.first(),
	        country: chance.country({ full: true })
	    }; */
        //this.handleChangeName = this.handleChangeName.bind(this);
        //this.handleChangeCountry = this.handleChangeCountry.bind(this);
	}
	

	// componentWillMount() {
	//    this.setState({
 //        	name: 'test'
 //      })
	// }

	/* handleChangeName(){
        this.state.name = chance.first();
        this.setState(this.state);   
    }

    handleChangeCountry() {
    	this.state.country = chance.country({full: true});
    	this.setState(this.state);
    } */

    /* render(){ 
       		return (<div>
        			<p>Hello, {this.state.name}.</p>
          		 	<p>You're from {this.state.country}.</p>

         			<button onClick={this.handleChangeName}>Click to change name!</button>
         			<button onClick={this.handleChangeCountry}>Click to change country!</button>
         	</div>); 
        
       
    } */
    render() {
	    return (<div>
	    {this.state.people.map((person, index) => (
	        <p key={person.name}>Hello, {person.name} from {person.country}!</p>
	    ))}
	    </div>);
	}
}

export default Detail;