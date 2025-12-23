<script lang="ts">
import type { Data } from '~/pages/index.vue';

export default defineNuxtComponent({
    props: {
        users: {
            type: Array as PropType<Data[]>,
            required: true,
        },
    },
    data() {
        return {
            isDescending: false
        }
    },
    computed: {
        sortedUsersByAge(): Data[] {
            const copyData = [...this.users];
            copyData.sort((a, b) => {
                return this.isDescending ? b.age - a.age : a.age - b.age
            })
            return copyData
        }
    },
    methods: {
        toggleSort() {
            this.isDescending = !this.isDescending;
        }
    }
})
</script>

<template>
    <div>
        <button v-on:click="toggleSort" style="">
            Sort by Age: {{ isDescending ? 'DESC' : 'ASC' }}
        </button>

        <table cellpadding="8" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Role</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user in sortedUsersByAge" :key="user.id">
                    <td class="text-center">{{ user.id }}</td>
                    <td class="text-center">{{ user.name }}</td>
                    <td class="text-center">{{ user.email }}</td>
                    <td class="text-center">{{ user.age }}</td>
                    <td class="text-center">{{ user.role }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="css">
button {
    padding: 8px;
    border: 1px solid lightblue;
    border-radius: 6px;
    cursor: pointer;
}

table {
    width: 100%;
    margin-top: 16px;
    padding: 16px;
    border: 1px solid lightgray;
    border-radius: 8px;
}

.text-center {
    text-align: center;
}
</style>