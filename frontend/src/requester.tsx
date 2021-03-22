import axios from 'axios';

const getAllVehicles = async (): Promise<any> => {
    try {
        const response = await axios.get('/api/vehicles');
        return response.data;
    } catch (error) {
        throw error;
    }
} 

export {
    getAllVehicles,
}
