import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Roles } from '@/constant/auth'

export const useAuthStore = defineStore('auth', () => {
  const profile = ref()
  const listDeviceByProject = ref<any[]>([])

  const isAdmin = computed(() => (profile.value?.roleId === Roles.ADMIN ? true : false))
  const listProject = computed(() => profile.value.project || [])
  const listDevice = computed(() => listProject.value.flatMap((p: any) => p.device) || [])

  const setProfile = (user: any) => {
    profile.value = user
  }

  const getListDeviceByProject = (projectId: number) => {
    const devices = listProject.value.find((p: any) => p.id === projectId).device

    if (!devices) return

    listDeviceByProject.value = devices

    return
  }

  return {
    profile,
    setProfile,
    isAdmin,
    listProject,
    listDevice,
    getListDeviceByProject,
    listDeviceByProject,
  }
})
