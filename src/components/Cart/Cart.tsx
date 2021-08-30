
import Modal from './../UI/Modal';
import './Cart.css'
const Cart = (props) => {
    const cartItem = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
            amount: '',
            ingredients: {
                'Sushi Rice': 'Sushi-Meshi',
                'Japanese rice vinegar': 'Komezu',
                'flavoring': 'Kombu',
            }
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
            amount: '',
            ingredients: {
                'self-rising flour': 'self-rising flour',
                '¼ cup': 'self-rising cornmeal',
                '¼ teaspoon Salt': 'Salt',
                '¼ teaspoon pepper': 'pepper',
            }
        }
    ]


    const test = cartItem.map(item => {
        console.log('item',item);
        return (
            <div key={item.id}>
               <p>{item.name}</p>
            </div>
        )
    })


    return (
        <div>
            <div className='Order-Page'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldwayspt.org%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2FFotolia_106693035_healthy-food-board.jpg&f=1&nofb=1' alt='Order-Food' />
            </div>
            <Modal>
                <h1>Shopping Cart</h1>
                {test}
            </Modal>
        </div>
    )
}

export default Cart