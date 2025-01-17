import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {callAPI} from "../utils/CallApi"
import { TR_CURRENCY } from '../utils/constants';
import {ProductDetails} from './';
import { useDispatch } from 'react-redux';
import {addToCart} from "../redux/cartSlice"

const ProductPage = () => {
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    const [quantity, setQuantity] = useState("1")
    const dispatch = useDispatch();

    const getProduct = () => {
      callAPI(`data/products.json`)
      .then((productResults) => {
        setProduct(productResults[id]);
      });
    }

    const addQuantityToProduct = () => {
      const productWithQuantity = { ...product, quantity: parseInt(quantity) };
      return productWithQuantity;
    }
    

    useEffect(()=> {
      getProduct();
    },[]);

    if (!product?.title) return <h1>Loading Product...</h1>

  return ( product && 
    <div className='h-screen bg-amazon-background'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto bg-white p-4'>
        <div className='grid grid-cols-10 gap-2'>
          {/* Left */}
          <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="Main product" />
            </div>
          {/* Middle */}
          <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400'>
            <div className='mb-3'>
               <ProductDetails product={product} ratings={true}/>
            </div>
            <div className='text-base xl:text-lg mt-3'>
              {product.description}
            </div>
            
          </div>
          {/* Right */}
          <div className='col-span-2 p-4 rounded bg-white'>
              <div className='text-xl xl:text-2xl text-black-700 text-left font-semibold'>{TR_CURRENCY.format(product.price)}</div>
              <div className='text-base xl:text-lg text-gray-500 font-semibold line-through'>{TR_CURRENCY.format(product.oldPrice)}</div>
              <div className='text-sm xl:text-base text-blue-500 font-semibold mt-3'>FREE Returns</div>
              <div className='text-sm xl:text-base text-blue-500 font-semibold mt-1'>FREE Delivery</div>
              <div className='text-sm xl:text-lg text-green-700 font-semibold mt-1'>In Stock</div>
              <div className='text-sm xl:text-lg mt-1'>
                Quantity:
                <select 
                  onChange={(e) => setQuantity(e.target.value)} 
                  className='p-1 bg-white border rounded-md focus:border-indigo-600'
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
             <Link to={"/checkout"}>
               <button onClick={() => dispatch(addToCart(addQuantityToProduct()))} className='bg-yellow-400 w-full p-3 text-xs xl:Text-sm rounded hover:bg-yellow-500 mt-3'>Add to Cart</button>
             </Link>
          </div>
        </div>  
      </div>      
    </div>
  )
}

export default ProductPage
