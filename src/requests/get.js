import axios from 'axios';

export const getProducts = async() =>{
    try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/products/api`
          );
          return res.data;
    } catch (error) {
        console.error("Error fetching All Custom Quiz:", error);
        return [];
    }
}