import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Roles } from '@/constant/auth'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const profile = ref()

    const isAdmin = computed(() => profile.value.roleId === Roles.ADMIN)

    const setProfile = (user: any) => {
      profile.value = user
    }

    return { profile, setProfile, isAdmin }
  },
  {
    persist: {
      storage: sessionStorage,
    },
  },
)
