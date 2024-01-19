'use client'
import { store } from '@/app/store/index'
import { Provider } from 'react-redux'
import Layout from '@/app/layout';

const ProductWrapper = () => {

    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    )
};

export default ProductWrapper;