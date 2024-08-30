import coffee from './assets/coffee.jpg'
import beans from './assets/beans.jpg'
import menu from './assets/menu.jpg'
import bean1 from './assets/bean1.jpg'
import bean2 from './assets/bean1.jpg'
import bean3 from './assets/bean1.jpg'
import { FaShippingFast, FaLeaf, FaCoffee, FaHandsHelping } from 'react-icons/fa'

export const items = [
    {
      image: coffee,
      title: 'Discover More',
      description: 'Experience our premium selection of coffee and more.',
      buttonText: 'READ MORE',
      link: '#'
    },
    {
      image: beans,
      title: 'Explore Our Beans',
      description: 'From the farm to your cup, explore our diverse coffee selection.',
      buttonText: 'LEARN MORE',
      link: '#'
    },
    {
      image: menu,
      title: 'Join Our Community',
      description: 'Become a part of our coffee-loving community and enjoy exclusive offers.',
      buttonText: 'JOIN NOW',
      link: '#'
    }
  ];
  
  export const newArrivals = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      price: "$12.99",
      image: bean1,
    },
    {
      id: 2,
      name: "Colombian Supremo",
      price: "$10.99",
      image: bean2,
    },
    {
      id: 3,
      name: "Brazilian Santos",
      price: "$9.99",
      image: bean3,
    },
  ];

  export const features = [
      {
        id: 1,
        icon: <FaShippingFast size={40} className="text-orange-500 mb-4" />,
        text: "Shipped free to your door with orders above €35",
      },
      {
        id: 2,
        icon: <FaLeaf size={40} className="text-green-500 mb-4" />,
        text: "Eco-friendly packaging for a better planet",
      },
      {
        id: 3,
        icon: <FaCoffee size={40} className="text-brown-500 mb-4" />,
        text: "From seed to cup, we ensure quality at every step",
      },
      {
        id: 4,
        icon: <FaHandsHelping size={40} className="text-blue-500 mb-4" />,
        text: "We would love to help you with any questions",
      },
    ];
  