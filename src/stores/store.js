import {BASE_URL} from "@/consts";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();


export const api = async (url, options = {}) => {
    const response = await fetch(BASE_URL + url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
            ...options.headers,
        },
    })

    const data = await response.json()

    return data
}

const token = ref('')
const login = ref(localStorage.getItem('login') || '')
const post = ref('')

export const useAuthStore = () => {
    const saveToken = (data) => {
        token.value = JSON.stringify(data)
        localStorage.setItem('token', data)
    }

    const saveLogin = (data) => {
        login.value = data
        localStorage.setItem('login', data)
    }

    const checkPost = async () => {
        try {
            const adminResponse = await fetch( BASE_URL + "user", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            })
            if(adminResponse.status === 200) {
                post.value = 1
                localStorage.setItem('post', post.value)
            } else {
                if(adminResponse.status === 403) {
                    const cookResponse = await fetch( BASE_URL + "order/taken/get", {
                        method: "GET",
                        headers: {
                            "Accept": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`,
                        }
                    })
                    if(cookResponse.status === 200) {
                        post.value = 3
                        localStorage.setItem('post', post.value)
                    } else {
                        post.value = 2
                        localStorage.setItem('post', post.value)
                    }
                }
            }

        } catch(e) {
            console.error(e)
        }
    }

    const logout = () => {
        token.value = ''
        localStorage.removeItem('token')
        login.value = ''
        localStorage.removeItem('login')
    }

    return {
        token,
        login,
        saveToken,
        logout,
        saveLogin,
        checkPost,
        post
    }
}
