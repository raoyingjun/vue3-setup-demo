import {ref, computed} from 'vue'

export default (users) => {
    const filter = ref('')
    const filteredUser = computed(() => {
        return users.filter(user => user.toLowerCase().includes(filter.value.toLowerCase()))
    })
    return {
        filter,
        filteredUser
    }
}
