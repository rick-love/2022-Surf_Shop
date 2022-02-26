import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  return (
    <div className='container'>
      <Link className='' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Container className='container card-container'>
          <Row>
            <CardImage>
              <img src={product.image} alt='product' />
            </CardImage>
            <CardBody>
              <div className='flex justify-center'>
                <ul className='bg-white rounded-lg border-y-4 border-gray-200 w-96 text-gray-900'>
                  <CardListItem>
                    <CardName>{product.name}</CardName>
                  </CardListItem>
                  <CardRating>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews}  reviews`}
                    />
                  </CardRating>
                  <CardListItem>
                    <CardPrice>€ {product.price}</CardPrice>
                  </CardListItem>
                  <CardListItem>
                    <CardDescription>
                      Description: {product.description}
                    </CardDescription>
                  </CardListItem>
                </ul>
              </div>
            </CardBody>
            <Cart>
              <div class='flex justify-center my-4'>
                <div className='flex'>
                  <div>Col1</div>
                  <div>Col2</div>
                </div>
              </div>
            </Cart>
          </Row>
        </Container>
      )}
    </div>
  )
}
const style = {
  container: 'bg-slate-100',
  row: 'flex my-4',
  image: 'shadow-lg rounded-xl',
  body: 'p-4',
  name: 'text-indigo-500 text-4xl font-semibold tracking-wider my-2',
  description: 'my-4 text-gray-600 text-md',
  rating: 'px-6 my-4 leading-tight tracking-wider text-amber-400',
  cart: '',
  price: 'pt-4 text-lg border-t font-medium text-slate-500',
  listItem: 'px-6 border-b border-gray-200 w-full',
  button: '',
}

function Container({ children }) {
  return <div className={style.container}>{children}</div>
}
function Row({ children }) {
  return <div className={style.row}>{children}</div>
}
function CardImage({ children }) {
  return <div className={style.image}>{children}</div>
}
function CardBody({ children }) {
  return <div className={style.body}>{children}</div>
}
function CardName({ children }) {
  return <div className={style.name}>{children}</div>
}
function CardDescription({ children }) {
  return <div className={style.description}>{children}</div>
}
function CardPrice({ children }) {
  return <div className={style.price}>{children}</div>
}
function CardListItem({ children }) {
  return <li className={style.listItem}>{children}</li>
}
function CardRating({ children }) {
  return <li className={style.rating}>{children}</li>
}
function Cart({ children }) {
  return <div className={style.cart}>{children}</div>
}
// function CardButton({ children }) {
//   return <button className={style.button}>{children}</button>
// }

// <div className='flex flex-col justify-center h-screen'>
//   <div className='relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white'>
//     <div className='w-full md:w-1/3 bg-white grid place-items-center'>
//       <img
//         src={product.image}
//         alt='tailwind logo'
//         className='rounded-xl'
//       />
//     </div>
//     <div className='w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3'>
//       <div className='flex justify-between item-center'>
//         <p className='text-gray-500 font-medium hidden md:block'>
//           {product.category}
//         </p>
//         <div className='flex items-center'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             className='h-5 w-5 text-yellow-500'
//             viewBox='0 0 20 20'
//             fill='currentColor'
//           >
//             <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
//           </svg>
//           <p className='text-gray-600 font-bold text-sm ml-1'>
//             4.96
//             <span className='text-gray-500 font-normal'>
//               (76 reviews)
//             </span>
//           </p>
//         </div>
//         <div className=''>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             className='h-5 w-5 text-pink-500'
//             viewBox='0 0 20 20'
//             fill='currentColor'
//           >
//             <path
//               fill-rule='evenodd'
//               d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
//               clip-rule='evenodd'
//             />
//           </svg>
//         </div>
//         <div className='bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block'>
//           {product.status}
//         </div>
//       </div>
//       <h3 className='font-black text-gray-800 md:text-3xl text-xl'>
//         {product.name}
//       </h3>
//       <p className='md:text-lg text-gray-500 text-base'>
//         {product.description}
//       </p>
//       <p className='text-xl font-black text-gray-800'>
//         € {product.price}
//       </p>
//     </div>
//   </div>
// </div>

//   const style = {
//     card: 'flex max-w-md bg-slate-100 shadow-lg rounded-lg overflow-hidden',
//     body: 'w-2/3 p-4',
//     title:
//       'text-indigo-500 text-1xl font-semibold uppercase tracking-wide hover:underline',
//     description: 'mt-2 text-gray-600 text-sm',
//     rating: 'flex item-center mt-2 my-1 leading-tight font-medium text-amber-400',
//     cart: '',
//     price: 'block mt-1 text-lg leading-tight font-medium text-black',
//     status: 'mt-2 text-slate-500',
//     button:
//       'px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded',
//   }

export default ProductScreen
