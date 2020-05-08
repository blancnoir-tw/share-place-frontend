import React, { useState } from 'react'

import styled from '../../styled'

import { Place } from '../types'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'

const PlaceItem = (props: Place) => {
  const [showMap, setShowMap] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  const openMapHandler = () => {
    setShowMap(true)
  }

  const closeMapHandler = () => {
    setShowMap(false)
  }

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true)
  }

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false)
  }

  const confirmDeleteHandler = () => {
    console.log('Deleting...')
    setShowConfirmModal(false)
  }

  return (
    <React.Fragment>
      <Modal
        isShow={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        footerAlign="right"
      >
        <ModalContent>
          <Map center={props.location} zoom={16}></Map>
        </ModalContent>
      </Modal>
      <Modal
        isShow={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footer={
          <React.Fragment>
            <Button color="is-inverse" onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button color="is-danger" onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
        footerAlign="right"
      >
        <p>Do you want to proceed and delete this place? Please note that it cant't be undone thereafter.</p>
      </Modal>
      <Item>
        <Card>
          <Image>
            <img src={props.imageUrl} alt={props.title} />
          </Image>
          <Info>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </Info>
          <Actions>
            <Button color="is-inverse" onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button color="is-danger" onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </Actions>
        </Card>
      </Item>
    </React.Fragment>
  )
}

const Item = styled.li`
  margin: 1rem 0;
`

const Image = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    height: 20rem;
  }
`

const Info = styled.div`
  padding: 1rem;
  text-align: center;

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`

const Actions = styled.div`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: column;

  button,
  a {
    margin: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

const ModalContent = styled.div`
  height: 20rem;
  width: 100%;
`

export default PlaceItem
