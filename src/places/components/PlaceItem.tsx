import React, { useState, useContext } from 'react'
import styled from '../../styled'

import { Place } from '../types'
import Box from '../../shared/components/UIElements/Box'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'
import { AuthContext } from '../../shared/context/auth-context'

const PlaceItem: React.FC<Place> = ({ address, location, description, placeId, imageUrl, title }) => {
  const auth = useContext(AuthContext)
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
        header={address}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        footerAlign="right"
      >
        <Box height="20rem" width="100%">
          <Map center={location} zoom={16}></Map>
        </Box>
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
            <img src={imageUrl} alt={title} />
          </Image>
          <Box p={1} textAlign="center">
            <Title>{title}</Title>
            <Address>{address}</Address>
            <p>{description}</p>
          </Box>
          <StyledBox p={1} textAlign="center">
            <Button color="is-inverse" onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && <Button to={`/places/${placeId}`}>EDIT</Button>}
            {auth.isLoggedIn && (
              <Button color="is-danger" onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </StyledBox>
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

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const Address = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const StyledBox = styled(Box)`
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

export default PlaceItem
