import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';

class TodoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupTitle: props.groupTitle,
      title: props.title,
      description: props.description,
      listId: props.listId,
      newCard: props.newCard,
      newTitle: "",
      newDescription: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  changeStatus() {

  }  

  handleInputChange(event) {
    let target = event.target
    let name = target.name
    let value = target.value

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  deleteCard() {
    if (window.confirm("Are you sure you want to permenanetly delete this task?")) {
      this.props.deleteListItem(this.state.groupTitle, this.props.listId)
    } else {
      console.log('Not Deleting')
    }
  }

  handleSubmit() {
    console.log('button press')
    console.log(this.state.groupTitle)
    this.props.addNewCard(this.state.groupTitle, this.state.newTitle, this.state.newDescription)
    this.props.removeNewCard()
  }

  generateBlankCard() {
    if(this.state.newCard) {
      let titleInput = <input type="text" name="newTitle" className="todo-card-input" 
                          onChange={this.handleInputChange} placeholder="Title"></input>
      let descriptionInput = <input type="text" name="newDescription" className="todo-card-input"
                                onChange={this.handleInputChange} placeholder="description"></input>
      this.setState({
        ...this.state,
        title: titleInput,
        description: descriptionInput
      })
    }
  }

  componentDidMount() {
    this.generateBlankCard()
    console.log(this.state.groupTitle)
  }

  render() {
    let newCardSubmitButton = <div></div>

    if(this.state.newCard) {
      newCardSubmitButton = (
        <div className="new-card-buttons">
          <Button variant="success" className="new-card-button" onClick={this.handleSubmit}>Add</Button>
          <Button variant="danger" className="new-card-button" onClick={this.props.removeNewCard}>Cancel</Button>
        </div> 
      )
    }

    let todoCardButtons = <div></div>

    if(!this.state.newCard) {
      todoCardButtons = (
        <div className="todo-icon-container">
          <i className="fas fa-check todo-icon todo-checkmark" onClick={this.props.changeCardStatus} ></i>
          <i className="fas fa-trash-alt todo-icon todo-trashcan" onClick={this.deleteCard}></i>
        </div>
      )
    }

    return (
      <div className="todo-card">
        <div className="todo-card-text">
          <div className="todo-card-title">{this.state.title}</div>
          <div className="todo-card-description">{this.state.description}</div>
          {newCardSubmitButton}
        </div>
        {todoCardButtons}
      </div>
    )
  }
}

export default TodoCard