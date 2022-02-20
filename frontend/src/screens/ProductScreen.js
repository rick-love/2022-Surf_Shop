import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
  const params = useParams()
  const product = products.find((p) => p._id === params.id)

  return (
    <div className='container'>
      <Link className='' to='/'>
        Go Back
      </Link>
      <Card className='card'>
        <h3>{product.name}</h3>
        <div>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <div>Price: € {product.price}</div>
        <div>{product.description}</div>
        <div>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</div>
        <button
          className='bg-black text-white'
          type='button'
          disabled={product.countInStock === 0}
        >
          Add to Cart
        </button>
        <CardBody>
          <CardTitle></CardTitle>
          <CardReviews></CardReviews>
          <CardText></CardText>
        </CardBody>
        <AddToCart>
          <CardPrice></CardPrice>
          <CardStatus></CardStatus>
          <CardButton>Add To Cart</CardButton>
        </AddToCart>
      </Card>
    </div>
  )
}
const style = {
  card: '',
  body: '',
  title: '',
  reviews: '',
  text: '',
  cart: '',
  price: '',
  status: '',
  button: '',
}

function Card({ children }) {
  return <div className={style.card}>{children}</div>
}
function CardBody({ children }) {
  return <div className={style.body}>{children}</div>
}
function CardTitle({ children }) {
  return <div className={style.title}>{children}</div>
}
function CardReviews({ children }) {
  return <div className={style.reviews}>{children}</div>
}
function CardText({ children }) {
  return <div className={style.text}>{children}</div>
}
function AddToCart({ children }) {
  return <div className={style.cart}>{children}</div>
}
function CardPrice({ children }) {
  return <div className={style.price}>{children}</div>
}
function CardStatus({ children }) {
  return <div className={style.status}>{children}</div>
}
function CardButton({ children }) {
  return <div className={style.button}>{children}</div>
}

export default ProductScreen
