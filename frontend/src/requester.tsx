import axios from 'axios';

const getAllVehicles = async (): Promise<any> => {
    try {
        const response = await axios.get('/api/vehicles');
        return response.data;
    } catch (error) {
        throw error;
    }
}

const updateData = async (data: any): Promise<any> => {
    try {
        await axios.post(`/api/vehicle/${data._id}`, {
            person: data.person,
            estimateDate: data.date
        })
    } catch (error) {
        throw error;
    }
}

export {
    getAllVehicles,
    updateData,
}
