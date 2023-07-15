import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

function Filtered(props: Props) {
  const [productData, setProductData] = useState([]);
  const param = useParams();

  useEffect(() => {
    try {
      (async function () {
        const resp = await axios.get(
          `http://localhost:3001/products?category=${param.category}`
        );
        setProductData(resp.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [param.category]);

  // Define an array of image URLs
  const imageUrls = [
    'https://img.zoommer.ge/zoommer-images/thumbs/0188663_samsung-galaxy-a22-a226fd-5g-4128gb-violet_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0183677_apple-iphone-14-pro-max-1tb-space-black_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0187190_xiaomi-13-lite-5g-8256gb-blue_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0179224_lg-tv-55uq75006lf_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0183600_samsung-tv-qe65q60baux-eu_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0144699_lenovo-v15-g2-82kb0038ru-intel-core-i7-1165g7-quad-28-ghz-intel-iris-xe-graphics-8gb-ram-ssd-512gb-f_550.jpeg',
    // Add more image URLs as needed
  ];

  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {productData.map((product: any, index: number) => (
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={product.id}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={imageUrls[index % imageUrls.length]} // Use the image URL based on the index
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Buy
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Filtered;
