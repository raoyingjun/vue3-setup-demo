import {ref} from 'vue'

export default (users) => {
    ref(users)
    return {
        users
    }
}
