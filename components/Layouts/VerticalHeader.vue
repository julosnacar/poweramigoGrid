<script setup>
  import { storeToRefs } from "pinia";
  import { useStore } from "~/store";
  import { useAuthStore } from '~/store/auth'; // import the auth store we just created
  
  const {toggleSidebar} = useStore();
  const router = useRouter();
  const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
  const {userName} = defineProps({userName: String})
  const logout = () => { logUserOut(); router.push('/login'); }
</script>

<template>
  <header>
    <nav class="navbar navbar-expand navbar-light navbar-top">
      <div class="container-fluid">
        <a href="#" class="burger-btn d-block" @click.prevent="toggleSidebar">
          <i class="bi bi-justify fs-3"></i>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="authenticated" class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-lg-0">
            <li class="nav-item dropdown me-1">
              <a class="nav-link active dropdown-toggle text-gray-600" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-envelope fs-4 text-gray-600"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
                <li>
                  <h6 class="dropdown-header">Messages</h6>
                </li>
                <li><a class="dropdown-item" href="#">No new messages</a></li>
              </ul>
            </li>
          </ul>
          <div class="dropdown">
            <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="user-menu d-flex">
                <div class="user-name text-end me-3">
                  <h6 class="mb-0 text-gray-600">User Name: {{ userName }}</h6>
                  <p class="mb-0 text-sm text-gray-600">Profile</p>
                </div>
                <div class="user-img d-flex align-items-center">
                  <div class="avatar avatar-md">
                    <img alt="avatar" src="~assets/images/faces/1.jpg">
                  </div>
                </div>
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
              <li>
                <h6 class="dropdown-header">Hello, User!</h6>
              </li>
              <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-person me-2"></i> My
                Profile</a></li>
              <li><a class="dropdown-item" href="#"><i class="icon-mid bi bi-gear me-2"></i>
                Settings</a></li>
                <hr class="dropdown-divider">
              <li><a class="dropdown-item" href="#" @click="logout"><i class="icon-mid bi bi-box-arrow-left me-2"></i> 
                Logout</a></li>
            </ul>
          </div>
        </div>
        <div v-else class="float-end">
          <nuxt-link to="/login">
            <i class="icon-mid bi bi-box-arrow-in-right"></i>
            Login
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>