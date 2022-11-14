import {useState} from 'react'
import AddItems from '../../context/AddItems'
import './index.css'

const CardList = props => {
  const [ids, setIds] = useState([])

  const {each} = props
  const {
    name,
    budgetName,
    cardType,
    expiry,
    limit,
    personName,
    spent,
    id,
  } = each

  const {value, currency} = spent

  const value1 =
    cardType === 'SUBSCRIPTION'
      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9iwiQaSjptsQiIr1oQgRbmmDobrSEcA26w&usqp=CAU'
      : 'https://media.istockphoto.com/id/1146078779/vector/creative-abstract-fire-logo.jpg?s=612x612&w=0&k=20&c=XKzb8lcQavPlMtCQBB1bj-QXovdMfvbs-8bJUOkPLek='

  const cardTypes =
    cardType === 'SUBSCRIPTION'
      ? `August Limit ${limit} SGD`
      : `Expires ${expiry}`

  const color = ids.includes(id) ? 'add-red' : ''

  console.log(color)

  return (
    <AddItems.Consumer>
      {value3 => {
        const {addCardList, addBlockList} = value3

        const cardItem = () => {
          addCardList(each)
        }
        const blockCard = () => {
          addBlockList(each)
          setIds(prev => [...prev, each.id])
          console.log(ids)
        }
        return (
          <li className={`card-list-li-card ${color}`}>
            <div className="name-img-card">
              <div>
                <h1 className="card-list-name-heading">{name}</h1>
                <div className="card-software-heading">
                  <p className="card-list-person-name">{personName}</p>
                  <p className="card-list-person-name">{budgetName}</p>
                </div>
              </div>
              <img className="card-image" src={value1} alt="cardImage" />
            </div>
            <div className="expiry-limit-card">
              <div className="card-list-add">
                <p className="card-list-person-name">{cardType}</p>
              </div>
              <p className="card-list-person-name">{cardTypes}</p>
            </div>
            <p className="dot-para">`</p>
            <div className="pink-card">
              <div className="pink-dot">
                <p className="dot-another-para">.</p>
                <p className="spent">Spent</p>
              </div>
              <p className="spent-value">
                {value} {currency}
              </p>
            </div>
            <div className="pink-card">
              <div className="pink-dot">
                <p className="dot-another-para1">.</p>
                <p className="spent">Spent</p>
              </div>
              <p className="spent-value">
                {value} {currency}
              </p>
            </div>
            <div className="buttons-card">
              <button className="btn" onClick={cardItem} type="button">
                Your
              </button>
              <button className="btn" type="button" onClick={blockCard}>
                Block
              </button>
            </div>
          </li>
        )
      }}
    </AddItems.Consumer>
  )
}

export default CardList
