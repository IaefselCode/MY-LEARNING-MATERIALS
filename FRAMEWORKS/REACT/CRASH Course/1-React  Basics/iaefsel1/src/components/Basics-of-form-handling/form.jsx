import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)

    }

    commentsHandle = (event) => {
        this.setState({
            comments: event.target.value
        })
        console.log(event.target.value)
    }

    topicHandle = (event) => {
        this.setState({
            topic: event.target.value
        })
        console.log(event.target.value)
    }
    
    submitHandle = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const{username,comments,topic} = this.state
        return (
            <div>
                <div className="container-sm">
                    <Form onSubmit={this.submitHandle}> 
                        <div><label htmlFor="dav"><h2>UserName:  </h2></label>
                            <input type='text' value={username} onChange={this.handleUsernameChange} className='form-control-lg m-2' id="dav" required/>
                        </div>

                        <div><label htmlFor="davi"><h2>Comments:  </h2></label>
                            <textarea value={comments} onChange={this.commentsHandle} className='form-control-lg m-2' id="davi" required></textarea>
                        </div>

                        <div><label htmlFor="top"><h2>The FrameWork:  </h2></label>
                            <select className='form-select-lg' name="top" id="top" value={topic} onChange={this.topicHandle} required>
                                <option defaultValue=''>Choose Framework</option>
                                <option value="REACT-JS">React</option>
                                <option value="ANGULAR-JS">Angular</option>
                                <option value="VUE-JS">Vue</option>
                                <option value="LARAVEL">Laravel</option>
                            </select>

                            <Button type='submit' onClick={this.submitHandle} className='btn btn-success m-2 p-3' >Submit</Button>
                        </div>
                    </Form>
                </div>

            </div>
        )
    }
}
export default Forms