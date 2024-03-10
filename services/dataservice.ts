import { create } from "zustand";
import axios, { AxiosResponse } from "axios";

interface DataStoreState {
  data: any | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
  postData: (url: string, data: any) => Promise<void>;
}

const useDataStore = create<DataStoreState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchData: async (url: string) => {
    set({ loading: true, error: null });
    try {
      const response: AxiosResponse<any> = await axios.get(url);
      set({ data: response.data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  postData: async (url: string, data: any) => {
    set({ loading: true, error: null });
    try {
      const response: AxiosResponse<any> = await axios.post(url, data);
      set({ data: response.data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useDataStore;