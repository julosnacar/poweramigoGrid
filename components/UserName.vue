<script setup>
    import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
    import { useAuthStore } from '~/store/auth'; // import the auth store we just created
    const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
    const router = useRouter();
    const user = ref({ email: '',  password: '', });
    
    const login = async () => {
        await authenticateUser(user.value); // call authenticateUser and pass the user object; redirect to homepage if user is authenticated
        if (authenticated) {
            router.push('/'); 
        }
    };
</script>
<template>
<div class="form-body">
    <div class="form-group">
        <label for="feedback2" class="sr-only">Email</label>
        <input type="text" id="txtEmail" class="form-control" placeholder="Email" name="email" v-model="user.email">
    </div>
    <div class="form-group">
        <label for="feedback2" class="sr-only">Password</label>
        <input type="password" id="txtPassword" class="form-control" placeholder="password" name="email" v-model="user.password">
    </div>
</div>
<div class="form-actions d-flex justify-content-end">
    <button @click.prevent="login" class="btn btn-primary me-1">Login</button>
</div>
</template>