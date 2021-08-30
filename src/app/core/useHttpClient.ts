import axios from 'axios';

const useHttpClient = () => {
  return {
    get: async <T>(url: string): Promise<T> => {
      const response = await axios.get(url);
      return response.data;
    },
    post: async <T>(url: string, data: unknown): Promise<T> => {
      const response = await axios.post(url, data);
      return response.data;
    },
    put: async <T>(url: string, data: unknown): Promise<T> => {
      const response = await axios.put(url, data);
      return response.data;
    },
    patch: async <T>(url: string, data: unknown): Promise<T> => {
      const response = await axios.patch(url, data);
      return response.data;
    },
    delete: async <T>(url: string): Promise<T> => {
      const response = await axios.delete(url);
      return response.data;
    },
  };
};

export default useHttpClient;
