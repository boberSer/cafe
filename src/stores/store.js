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
const login = ref('')
const post = ref('')

export const useAuthStore = () => {
    const saveToken = (data) => {
        token.value = JSON.stringify(data)
        localStorage.setItem('token', data)
    }

    const saveLogin = (data) => {
        token.value = JSON.stringify(data)
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
            } else {
                if(adminResponse.status === 403) {
                    const ofikResponse = await fetch( BASE_URL + "work-shift/1/orders", {
                        method: "GET",
                        headers: {
                            "Accept": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`,
                        }
                    })
                    if(ofikResponse.status === 200) {
                        post.value = 2
                    } else post.value = 3
                }
            }

        } catch(e) {
            console.error(e)
        }
    }

    const logout = () => {
        token.value = ''
        localStorage.removeItem('token')
        router.push('/')
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