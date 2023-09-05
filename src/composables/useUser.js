import { ref, readonly } from 'vue'

const user = ref()

export function useUser() {
  return {
    user: readonly(user),
    setUser: value => {
      user.value = value
    } 
  }
}