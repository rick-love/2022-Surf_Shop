import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className='py-4'>
      <Card>
        <img className='w-1/3 object-cover' src={product.image} />
        <CardBody>
          <CardTitle>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </CardTitle>
          <CardDescription>{product.description}</CardDescription>
          <CardRating>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </CardRating>
          <CardStatus>In Stock</CardStatus>
          <div className='flex item-center justify-between mt-3'>
            <CardPrice>€ {product.price}</CardPrice>
            <CardButton type='button' disabled={product.countInStock === 0}>
              Add to Card
            </CardButton>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
const style = {
  card: 'flex max-w-md bg-slate-100 shadow-lg rounded-lg overflow-hidden',
  body: 'w-2/3 p-4',
  title:
    'text-indigo-500 text-1xl font-semibold uppercase tracking-wide hover:underline',
  description: 'mt-2 text-gray-600 text-sm',
  rating: 'flex item-center mt-2 my-1 leading-tight font-medium text-amber-400',
  cart: '',
  price: 'block mt-1 text-lg leading-tight font-medium text-black',
  status: 'mt-2 text-slate-500',
  button:
    'px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded',
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
function CardRating({ children }) {
  return <div className={style.rating}>{children}</div>
}
function CardDescription({ children }) {
  return <div className={style.description}>{children}</div>
}
function CardPrice({ children }) {
  return <div className={style.price}>{children}</div>
}
function CardStatus({ children }) {
  return <div className={style.status}>{children}</div>
}
function CardButton({ children }) {
  return <button className={style.button}>{children}</button>
}

export default Product
