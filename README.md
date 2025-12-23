# PART A Code Reading & Debugging:

#### 1. Code Reading
```
a. What will be logged to the console, and why?
   Answer: The console logs 1,0 because count is initialized to 0 in setup(), then incremented to 1 in mounted() hook, after that the watcher revices the updated value as newVal which is 1 and the previous value as oldVal which is 0.


b. When will doubled be re-computed?
   Answer: double will be re-computed whenever count changes, due to it is a computed property.
```

#### 2. Debugging
```
a. Does this code contain a bug?
   Answer: Yes there are 2 bugs. First title is optional, it could be undefined. Second calling .toUpperCase() on undefined throws an error.

b. If there is any bug, how would I fix it to make it safe?
   Answer: Set the title props as required and also add a validator to ensuren the type is string and handle missing/undefined.

<script lang="ts">
    export default defineNuxtComponent({
        props: {
            title: {
                type: String,
                required: true,
                validator: (v: unknown) => typeof v === 'string' && v.length > 0,
            }
        },
        computed: {
            upperTitle() {
                return (this.title ?? '').toUpperCase()
            },
        }
    })
</script> 
```

# PART B Coding and Algorithms:

#### 1. Implement groupBy function.
- part-b/groupby.ts

#### 2.Implement a function to remove duplicate values from an array without using Set.
- part-b/remove-duplicate.ts

#### 3.Create a /users page and a userList.vue component with these following
- pages/index.vue
- pages/users.vue
- components/userList.vue

# PART C: SCSS & Styling:
#### Create a page that looks exactly like this with only one .scss file that does not have any library included.
- pages/scss.vue
