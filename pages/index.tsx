import type { NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/router";

const config = {
  method: "POST",
  url: `http://localhost:3000/api/createpayment`,
  headers: {
    "Content-Type": "application/json",
  },
};

const Home: NextPage = () => {
  const router = useRouter();

  const mpCheckout = async () => {
    try {
      const response = await axios(config);
      if (response.status === 200) {
        const { init_point } = response.data;
        router.push(init_point, undefined, { shallow: true });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={mpCheckout}>Pagar algo</button>
    </div>
  );
};

export default Home;
