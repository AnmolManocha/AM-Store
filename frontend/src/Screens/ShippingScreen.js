import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

function ShippingScreen() {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [state, setState] = useState(shippingAddress.state)
  const [zipcode, setZipcode] = useState(shippingAddress.zipcode)
  const [country, setCountry] = useState(shippingAddress.country)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, state, zipcode, country }))
    navigate('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address' className='pb-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='address'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city' className='pb-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='city'
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='state' className='pb-3'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='state'
            placeholder='State'
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='zipcode' className='pb-3'>
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type='zipcode'
            placeholder='Zipcode'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country' className='pb-3'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='country'
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Proceed
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
