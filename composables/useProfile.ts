const useProfile = () => {
    const graph = async () => {
        const T = ['3','132']
        var  datos = []
        //var value
        for (let x in T){
            const {pending,data} = await useFetch(//estaciones, 3 y 132
            "https://poweramigo.com/smr/api/get/"+T[x]+"/data?"+
            "date_start="+"2023-12-01"+
            "&"+"time_start="+'12:00:00'+
            "&"+"date_end=2023-12-02"+
            "&"+"units="+'P'+
            "&"+"interval="+'1hour'+
            "&"+"time_end="+'12:00:00',
            {
                method: "GET",
                headers: {Authorization: 'Bearer'+' '+ document.cookie.split('=')[1]},
            })
            datos.push(data)
        }
        return datos
    }
    return {graph}
}
export default useProfile