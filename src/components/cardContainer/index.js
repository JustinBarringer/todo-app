import React from 'react';
import './index.css';
import TodoCard from '../todoCard'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupTitle: props.groupTitle,
      items: props.items,
      blankCards: []
    }

    this.handleNewCard = this.handleNewCard.bind(this)
    this.removeNewCard = this.removeNewCard.bind(this)
  }

  handleNewCard() {
     let blankCard = <TodoCard newCard={true} addNewCard={this.props.addNewCard} 
                        groupTitle={this.props.groupTitle} removeNewCard={this.removeNewCard} key="x"/>
     let tempBlankCards = this.state.blankCards
     tempBlankCards.push(blankCard)
     this.setState({
       ...this.state,
       blankCards: tempBlankCards
     })
  }

  removeNewCard() {
    this.setState({
      ...this.state,
      blankCards: []
    })
  }
  

  render() {

    let cards = <div className="card-item"></div>
    if (this.props.items.length > 0) {
      cards = this.props.items.map(
        (x, i) => <TodoCard title={x.title} groupTitle={this.props.groupTitle}
                    description={x.description} key={x.title} listId={i}
                    changeCardStatus={this.props.changeCardStatus}
                    newCard={false} deleteListItem={this.props.deleteListItem}/>
      )
    }

    let blankCard = <div></div>
    if (this.state.blankCards.length > 0) {
      blankCard = this.state.blankCards
    }

    return (
      <div className="card-container">
        <div className="card-container-title">{this.state.groupTitle}</div>
        {cards}
        {blankCard}
        {/* <div className="card-container-newCard" 
          onClick={() => this.props.addNewCard(this.state.groupTitle, "New Item", "Description")}>+</div> */}
        <div className="card-container-newCard" 
          onClick={this.handleNewCard}>+</div>
      </div>
    )
  }
}

export default CardContainer