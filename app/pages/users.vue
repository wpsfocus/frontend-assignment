<script lang="ts">
import UserList from '~/components/userList.vue';
import type { Data } from './index.vue';

function wait(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export default defineNuxtComponent({
    name: 'userPage',
    components: { UserList },
    data() {
        return {
            isLoading: false,
            error: null as string | null
        }
    },
    computed: {
        users(): Data[] {
            const userState = useState<Data[]>('users', () => [])
            return userState.value
        },
    },
    methods: {
        async fakeFetchUsers() {
            this.isLoading = true
            this.error = null

            try {
                await wait(2000)
            } catch (e) {
                this.error = e ? e as string : null
            } finally {
                this.isLoading = false
            }
        }
    },
    mounted() {
        this.fakeFetchUsers()
    }
})
</script>

<template>
    <p v-if="isLoading">Loading....</p>
    <p v-else-if="error">{{ error }}</p>

    <div v-else>
        <h2>Users</h2>
        <UserList :users="users" />
    </div>
</template>