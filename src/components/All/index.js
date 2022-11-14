import {useState, useEffect} from 'react'
import {Popup} from 'reactjs-popup'

import {BiFilter} from 'react-icons/bi'

import InfiniteScroll from 'react-infinite-scroll-component'

import CardList from '../CardList'

import './index.css'

const All = () => {
  const [cardItem, setCardItems] = useState([])

  const [perPage, setPerPage] = useState(10)

  const [card1, setCard1] = useState('')
  const [card2, setCard2] = useState('')
  const [select, setSelect] = useState('')

  console.log(perPage)

  useEffect(() => {
    const apiResult = async () => {
      const options = {
        method: 'GET',
      }
      const response = await fetch(
        `https://636df5d6b567eed48ace4185.mockapi.io/all?p=1&l=${perPage}&filter=${
          select || card1
        }`,
        options,
      )
      const data = await response.json()
      const finalData = data.map(each => ({
        name: each.Name,
        available: each.available_to_spend,
        budgetName: each.budget_name,
        cardType: each.card_type,
        expiry: each.expiry,
        id: each.id,
        image: each.image,
        limit: each.limi,
        ownerId: each.owner_id,
        personName: each.person_name,
        status: each.status,
        spent: each.spent,
      }))

      console.log(data)
      setCardItems(finalData)
    }
    apiResult()
  }, [perPage, select, card1])

  const onValueChange = e => {
    const filter = cardItem.filter(each => each.name.includes(e.target.value))
    setCardItems(filter)
  }

  const input1 = e => {
    setCard1(e.target.value)
  }

  const input2 = e => {
    setCard2(e.target.value)
  }

  const selectValue = e => {
    setSelect(e.target.value)
  }

  const clearAll = () => {
    setSelect('')
    setCard1('')
  }

  console.log(select)

  console.log(card1)
  console.log(card2)

  const v = true
  return (
    <InfiniteScroll
      dataLength={cardItem.length}
      hasMore={v}
      next={() => setPerPage(perPage + 10)}
      loader={<h4>Loading...</h4>}
    >
      <div className="input-popup-container">
        <input className="input" type="search" onChange={onValueChange} />
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <div className="filter-div">
                <BiFilter />
                <p>Filter</p>
              </div>
            }
          >
            {close => (
              <div className="popup-card">
                <div>
                  <p className="filter-heading">Filter</p>
                  <hr />
                  <div>
                    <p className="type">Type</p>
                    <div className="checkbox-card">
                      <div className="checkbox">
                        <input
                          onChange={input1}
                          value="SUBSCRIPTION"
                          id="sub"
                          type="checkbox"
                        />
                        <label htmlFor="sub">Subcription</label>
                      </div>
                      <div>
                        <input
                          onChange={input2}
                          value="BURNER"
                          id="bur"
                          type="checkbox"
                        />
                        <label htmlFor="bur">Burner</label>
                      </div>
                    </div>
                    <p className="type">Cardholder</p>
                    <select
                      onChange={selectValue}
                      placeholder="Select Cardholder"
                      className="select"
                    >
                      <option value="Vishal">Vishal</option>
                      <option>Anu</option>
                      <option value="Ajay">Ajay</option>
                      <option value="Vamsi">Vamsi</option>
                    </select>
                  </div>
                </div>
                <button className="apply" type="button">
                  Apply
                </button>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={clearAll}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  close
                </button>
              </div>
            )}
          </Popup>
        </div>
      </div>

      <div className="all-card-in-place">
        {cardItem.map(each => (
          <CardList each={each} key={each.id} />
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default All
