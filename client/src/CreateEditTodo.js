import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class CreateEditTodo extends React.Component {
constructor(props) {
super(props)
    this.state = {
        title: props.title || '',
        isDone: props.isDone || false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
}

onChangeItem = (event) => {
    const target = event.target
    const name = target.name

    this.setState({
        [name]: target.value
    })
}

handleSubmit (event) {
    event.preventDefault()
    const { title, isDone } = this.state
    const { id, history } = this.props
    // Editing
    if(id) {
        axios.put(`/api/todo/${id}`, {
            title: title,
            is_done: isDone === 'true'
        }).then(()=> {
            this.props.updateState(title, isDone === 'true')
            this.props.toggleEdit()
        })
    } else {
        axios.post('/api/todo', {title: title, is_done: isDone === 'true' }).then(()=>{
            history.push('/')
        })
    }
}

render() {
const { isDone, title } = this.state
return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="title">Title of todo</label>
                <input 
                    name="title" 
                    type="text" 
                    className="form-input" 
                    id="title" 
                    value={title} 
                    onChange={this.onChangeItem}/>
            </div>
            <div>
                <label htmlFor="isDone">Todo completed?</label>
                <select 
                    name="isDone" 
                    className="form-select" 
                    id="is-done" 
                    value={isDone} 
                    onChange={this.onChangeItem}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                </select>
                <div>
                    <button 
                        className="btn btn-active" 
                        type="submit">Submit</button>
                    <button 
                        className="btn btn-delete" 
                        type="button" 
                        onClick={this.props.toggleEdit}>Cancel</button>
                </div>
            </div>
        </form>
    </div>
)
}
}

export default withRouter(CreateEditTodo)