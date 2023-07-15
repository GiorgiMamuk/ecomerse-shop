import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from '../../Slider/Slider';

interface Props {}

interface Product {
  id: number;
  title: string;
  description: string;
}

const Products: React.FC<Props> = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('');
  const limit = 6;
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pages.push(i);
  }

  const imageUrls = [
    'https://img.zoommer.ge/zoommer-images/thumbs/0168776_acer-nitro-5-an515-58-75ze-nhqfler00b-intel-core-i7-12700h-23-ghz-nvidia-geforce-rtx-3050-ti-4gb-16g_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0183677_apple-iphone-14-pro-max-1tb-space-black_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0144699_lenovo-v15-g2-82kb0038ru-intel-core-i7-1165g7-quad-28-ghz-intel-iris-xe-graphics-8gb-ram-ssd-512gb-f_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0169699_lg-tv-55up78003lb_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0185465_xiaomi-tv-a2-55-global-version_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0183332_realme-c33-4128gb-blue_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0166503_samsung-tv-ue85au7172ux-eu_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0182243_hp-omen-16-78v44ea-161-full-hd-1920x1080-amd-ryzen-7-6800h-octa-47-ghz-amd-radeon-rx6650m-8gb-ram-16_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0185465_xiaomi-tv-a2-55-global-version_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0144699_lenovo-v15-g2-82kb0038ru-intel-core-i7-1165g7-quad-28-ghz-intel-iris-xe-graphics-8gb-ram-ssd-512gb-f_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0169699_lg-tv-55up78003lb_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0183677_apple-iphone-14-pro-max-1tb-space-black_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0168776_acer-nitro-5-an515-58-75ze-nhqfler00b-intel-core-i7-12700h-23-ghz-nvidia-geforce-rtx-3050-ti-4gb-16g_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0183332_realme-c33-4128gb-blue_550.jpeg',
    'https://img.zoommer.ge/zoommer-images/thumbs/0166503_samsung-tv-ue85au7172ux-eu_550.jpeg',
  ];

  async function getProducts() {
    try {
      const resp = await axios.get(
        `http://localhost:3001/products?skip=${(currentPage - 1) * limit}&take=${limit}`
      );
      setProducts(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTotal() {
    try {
      const resp = await axios.get('http://localhost:3001/products');
      setTotal(resp.data.length);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
    getTotal();
  }, [currentPage]);

  return (
    <>
      <section className="bg-white ">
        <Slider />
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {products.map((product: Product, index: number) => (
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover rounded-t-lg"
                      src={imageUrls[index]}
                      alt=""
                    />
                  </div>
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
          <nav
            aria-label="Page navigation example w-full flex justify-center"
            className="w-full flex mt-10"
          >
            <ul className="-space-x-px text-sm w-full flex justify-center">
              {pages.map((index: number) => (
                <li
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className="cursor-pointer"
                >
                  <div className="w-[100px] flex justify-between">
                    <a
                      href="#"
                      className="flex items-center justify-center px-10 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {index}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Products;
