import axios, { AxiosResponse } from 'axios'

export async function ArrayIng(type4: string) {

    const { data } = await axios.get(
        '/',
        {
            params: {
                type: type4,
            }
        }
    )
    return (console.log(data));

}

