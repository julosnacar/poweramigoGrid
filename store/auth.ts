import { defineStore } from 'pinia';
interface UserPayloadInterface { email: string;  password: string;}
interface UserInfo { grid: number }
export const useAuthStore = defineStore('auth', {
  state: () => ({
    grid3:[] as UserInfo[],
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }:UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch('https://poweramigo.com/smr/api/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: { email,password, },
      });
      this.loading = pending;

      if (data.value) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = data?.value?.api_token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
        this.valuesUser()
      }
    },
    
    async valuesUser() {
      const token = useCookie('token');
      var suma = 0;
      var indice = 0;
      const T = ['3','132']
      for (let x in T){
        const {pending,data} = await useFetch(
          "https://poweramigo.com/smr/api/get/"+T[x]+"/data?"+
          "date_start="+"2023-12-01"+
          "&"+"time_start="+'12:00:00'+
          "&"+"date_end=2023-12-08"+
          "&"+"units="+'P'+
          "&"+"interval="+'1hour'+
          "&"+"time_end="+'12:00:00',
          {
              method: "GET",
              headers: {Authorization: 'Bearer'+' '+ token.value},
          })
          if (data.value) {
            if (T[x] == '3'){
              for (let j =0; j<data.value['grid'].length; j++) {
                this.grid3.push(data.value['grid'][j].value)
              }
            }
          }
      }
  },
    async logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      const { data } = await useFetch('https://poweramigo.com/smr/api/logout', {
        method: 'post',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.value}`
        },
      });

      if(data.value) {
        console.log(data.value)//.success);
        this.authenticated = false; // set authenticated  state value to false
        token.value = null; // clear the token cookie
      }else 
        console.log('error logging out');
    },
  },
});