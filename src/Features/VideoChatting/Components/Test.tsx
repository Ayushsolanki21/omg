import { HeroParallax } from "../../../components/ui/hero-parallax";

const Test = () => {
  const products = [
    {
      title: "Product 1",
      link: "/product1",
      thumbnail: "/images/product1.jpg",
    },
    {
      title: "Product 2",
      link: "/product2",
      thumbnail: "/images/product2.jpg",
    },
    {
      title: "Product 3",
      link: "/product3",
      thumbnail: "/images/product3.jpg",
    },
    {
      title: "Product 4",
      link: "/product4",
      thumbnail: "/images/product4.jpg",
    },
    {
      title: "Product 5",
      link: "/product5",
      thumbnail: "/images/product5.jpg",
    },
    {
      title: "Product 6",
      link: "/product6",
      thumbnail: "/images/product6.jpg",
    },
    {
      title: "Product 7",
      link: "/product7",
      thumbnail: "/images/product7.jpg",
    },
    {
      title: "Product 8",
      link: "/product8",
      thumbnail: "/images/product8.jpg",
    },
    {
      title: "Product 9",
      link: "/product9",
      thumbnail: "/images/product9.jpg",
    },
    {
      title: "Product 10",
      link: "/product10",
      thumbnail: "/images/product10.jpg",
    },
    {
      title: "Product 11",
      link: "/product11",
      thumbnail: "/images/product11.jpg",
    },
    {
      title: "Product 12",
      link: "/product12",
      thumbnail: "/images/product12.jpg",
    },
    {
      title: "Product 13",
      link: "/product13",
      thumbnail: "/images/product13.jpg",
    },
    {
      title: "Product 14",
      link: "/product14",
      thumbnail: "/images/product14.jpg",
    },
    {
      title: "Product 15",
      link: "/product15",
      thumbnail: "/images/product15.jpg",
    },
  ];

  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
};

export default Test;
