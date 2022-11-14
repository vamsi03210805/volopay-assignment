import React from 'react'

const AddItems = React.createContext({
  cards: [],
  blockCards: [],
  addCardList: () => {},
  addBlockList: () => {},
})

export default AddItems
