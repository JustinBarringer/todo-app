import React from 'react'
import CardContainer from '../components/cardContainer'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [
        {type: "To-Do", items: [
          {title: "Take out Trash", description: "empty trash into trashbin, and take to street"},
          {title: "Clean Kitchen", description: "Wash dishes, Clean counters"},
          {title: "Code ReactJS", description: ""}
        ]},
        {type: "Completed", items: [
          {title: "Empty liter box", description: "empty trash into trashbin, and take to street"},
          {title: "Pay Rent", description: "Wash dishes, Clean counters"},
          {title: "Get started with app", description: ""}
        ]}
      ]  
    }
    this.changeCardStatus = this.changeCardStatus.bind(this)
    this.addNewCard = this.addNewCard.bind(this)
    this.deleteListItem = this.deleteListItem.bind(this)
  }

  addNewCard(type, title, desc) {
    console.log(type)
    let tempList = this.state.lists
    for (let i = 0; i < tempList.length; i++) {
      if (tempList[i].type === type) {
        tempList[i].items.push({title: title, description: desc})
        this.setState({
          ...this.state,
          lists: tempList
        })
      } 
    }
  }

  deleteListItem(type, key) {
    console.log(key)
    let tempList = this.state.lists
    for (let i = 0; i < tempList.length; i++) {
      if (tempList[i].type === type) {
        console.log(tempList[i].items)
        tempList[i].items.splice(key, 1)
        break
      }
    }
    this.setState({
      ...this.state,
      lists: tempList
    })
  }

  changeCardStatus(type, key) {
    for (let i = 0; i < this.state.lists.length; i++) {
      if (this.state.lists[i].type === type) {

      }
    }
    console.log("Test props")
  }


  render() {

    let cardContainers
    if (this.state.lists.length > 0) {
      cardContainers = this.state.lists.map(
        (x, i) => <CardContainer groupTitle={x.type} items={x.items} 
        key={x.type} changeCardStatus={this.changeCardStatus} addNewCard={this.addNewCard} deleteListItem={this.deleteListItem} />
      )
    }

    return (
      <div className="main-page-container">
        {cardContainers}
        {/* <CardContainer title="To-Do" items={this.state.todoItems}/> */}
      </div>
    )
  }
}

export default MainPage