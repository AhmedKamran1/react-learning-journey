import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';
import axios from 'axios';

export const fetchCartData = () => {

  const fetchData = async () => {
    const response = await axios.get('https://react-http-c1785-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
    if (response.error) throw new Error('Could not fetch cart data!')
    return response.data;
  };

  return async (dispatch) => {
      try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(cartActions.replaceCart({items: cartData.items || [],totalQuantity: cartData.totalQuantity}));
    } catch (error) {
      dispatch(uiActions.showNotification({status: 'error',title: 'Error!',message: 'Fetching cart data failed!'}));
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-c1785-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
