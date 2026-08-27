import { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER
  const [method,setMothod] = useState('WhatsApp Payment');
  const [loading, setLoading] = useState(false)
  const { navigate, cartItems, setCartItems, getCartAmount, delivery_fee, products, backendUrl, token, currency } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler  = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData( data => ({...data,[name]:value }))
  }

  const createWhatsAppMessage = (orderId, orderItems) => {
    let message = `NEW WHATSAPP PAYMENT ORDER - FOREVER\n\n`
    message += `Order ID: ${orderId}\n\n`
    message += `CUSTOMER DETAILS\n`
    message += `Name: ${formData.firstName} ${formData.lastName}\n`
    message += `Phone: ${formData.phone}\n`
    message += `Email: ${formData.email}\n\n`
    message += `DELIVERY ADDRESS\n`
    message += `${formData.street}\n`
    message += `${formData.city}, ${formData.state}\n`
    message += `${formData.zipcode}, ${formData.country}\n\n`
    message += `ORDER ITEMS\n\n`

    orderItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Size: ${item.size}\n`
      message += `   Quantity: ${item.quantity}\n`
      message += `   Price: ${currency}${item.price * item.quantity}\n\n`
    })

    const subtotal = getCartAmount()
    message += `--------------------\n`
    message += `Subtotal: ${currency}${subtotal}\n`
    message += `Delivery: ${currency}${delivery_fee}\n`
    message += `TOTAL: ${currency}${subtotal + delivery_fee}\n\n`
    message += `Payment Method: WhatsApp Payment\n`
    message += `Payment Status: Pending\n\n`
    message += `Thank you for shopping with FOREVER`
    return message
  }

  const onSubmitHandler = async (event) => {
     event.preventDefault()
     if (!token) {
       toast.error('Please login before placing an order')
       navigate('/login')
       return
     }
     if (loading) return

     setLoading(true)
     try {
       const orderItems = []
       for (const productId in cartItems) {
         for (const size in cartItems[productId]) {
           const quantity = cartItems[productId][size]
           if (quantity > 0) {
             const product = products.find((item) => item._id === productId)
             if (product) {
               orderItems.push({ ...product, size, quantity })
             }
           }
         }
       }

       const response = await axios.post(
         `${backendUrl}/api/order/place`,
         {
           address: formData,
           items: orderItems,
           amount: getCartAmount() + delivery_fee,
         },
         { headers: { token } },
       )

       if (response.data.success) {
         setCartItems({})
         const message = createWhatsAppMessage(response.data.orderId, orderItems)
         const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
         window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
         toast.success(response.data.message)
         navigate('/order')
       } else {
         toast.error(response.data.message)
       }
     } catch (error) {
       toast.error(error.response?.data?.message || error.message)
     } finally {
       setLoading(false)
     }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' >
      {/* -------------- left Side ----------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-120' >

        <div className='text-xl sm:text-2xl my-3'>
            <Title  text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3' >
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name'/>
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name'/>
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address'/>
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
        <div className='flex gap-3' >
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3' >
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zip Code'/>
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone'/>
      </div>



      {/* -------------- Right Side ----------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        
        <div className='mt-12' >
           <Title text1={'PAYMENT'} text2={'METHOD'}  />
           {/* ----------------- Payment Method Selection ---------------- */}
           <div className='flex gap-3 flex-col lg:flex-row'> 
              <div onClick={() => setMothod('WhatsApp Payment')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer' >
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'WhatsApp Payment' ? 'bg-green-400' : '' } `} ></p>
                <p className='text-gray-500 text-sm font-medium mx-4' >PAY THROUGH WHATSAPP</p>
              </div>
           </div>

           <div className='w-full text-end mt-8 ' >
              <button type='submit' disabled={loading} className='bg-black text-white px-16 py-3 disabled:opacity-50' >{loading ? 'PLACING ORDER...' : 'PLACE ORDER'}</button>
           </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder