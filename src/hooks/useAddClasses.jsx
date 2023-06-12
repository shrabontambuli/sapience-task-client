import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useAddClasses = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: select = []} = useQuery({
        queryKey: ['addClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myClasses?email=${user?.email}`)
            return res.data;
        }
      })
      return [select , refetch];
};

export default useAddClasses;