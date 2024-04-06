
import { UserService } from "@/services/user.service"
import { useQuery} from 'react-query';


export function useProfile() {
    const {data} = useQuery({
      queryKey: ['get profile'],
      queryFn: ()  => UserService.getProfile(),
      select: ({ data }) => data
    }); 

    return { profile: data }
}
