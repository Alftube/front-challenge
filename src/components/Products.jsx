export default function Products({ productos }) {
  console.log(productos);

  return (
    <section className='products' id='products'>
      <h4>
        tech <span>products</span>
      </h4>
      <label htmlFor='product-category'>Filter by:</label>
      <select name='product-category' id='product-category'>
        <option value='all'>All Products</option>
      </select>
      <span className='product-order'>Sort by:</span>
      <button className='order-button'>Most Recent</button>
      <button className='order-button'>Lowest Price</button>
      <button className='order-button'>Highest Price</button>
      <span className='pages'>Page 1 of 2</span>
      <div className='all-products'>
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul> */}
      </div>
      <p className='quantity-products'>32 of 32 products</p>
    </section>
  );
}

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZiZGI0NTg0NmE2MDAwMjA3ZTU3OTEiLCJpYXQiOjE2ODQ3OTAwODV9.tkK4q_0B2OU2rc-ACQq_W22e2nDCJ6Lf_9xes6YcQxs`,
  },
};

const url = 'https://coding-challenge-api.aerolab.co/products';

export async function getStaticProps() {
  const response = await fetch(url, options);
  const { data } = await response.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
}
