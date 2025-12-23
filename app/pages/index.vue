<script lang="ts">
import { defineComponent } from 'vue';
export interface Data { id: number, name: string, email: string, age: number, role: string }

export default defineComponent({
    name: 'indexPage',
    mounted() {
        const usersState = useState<Data[]>("users", () => []);

        const mockData: Data[] = [
            { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", age: 22, role: "Intern" },
            { id: 2, name: "Brian Smith", email: "brian.smith@example.com", age: 25, role: "Frontend Developer" },
            { id: 3, name: "Catherine Lee", email: "catherine.lee@example.com", age: 28, role: "UI/UX Designer" },
            { id: 4, name: "Daniel Kim", email: "daniel.kim@example.com", age: 31, role: "Backend Developer" },
            { id: 5, name: "Emma Williams", email: "emma.williams@example.com", age: 24, role: "QA Engineer" },
            { id: 6, name: "Frank Miller", email: "frank.miller@example.com", age: 35, role: "Project Manager" },
            { id: 7, name: "Grace Brown", email: "grace.brown@example.com", age: 27, role: "Product Designer" },
            { id: 8, name: "Henry Wilson", email: "henry.wilson@example.com", age: 29, role: "DevOps Engineer" },
            { id: 9, name: "Isabella Moore", email: "isabella.moore@example.com", age: 23, role: "Intern" },
            { id: 10, name: "Jack Taylor", email: "jack.taylor@example.com", age: 34, role: "Tech Lead" },
            { id: 11, name: "Karen Anderson", email: "karen.anderson@example.com", age: 26, role: "Frontend Developer" },
            { id: 12, name: "Leo Thomas", email: "leo.thomas@example.com", age: 32, role: "Backend Developer" },
            { id: 13, name: "Mia Jackson", email: "mia.jackson@example.com", age: 21, role: "Intern" },
            { id: 14, name: "Noah White", email: "noah.white@example.com", age: 28, role: "QA Engineer" },
            { id: 15, name: "Olivia Harris", email: "olivia.harris@example.com", age: 30, role: "Product Owner" },
            { id: 16, name: "Paul Martin", email: "paul.martin@example.com", age: 36, role: "Engineering Manager" },
            { id: 17, name: "Quinn Thompson", email: "quinn.thompson@example.com", age: 27, role: "UI/UX Designer" },
            { id: 18, name: "Rachel Garcia", email: "rachel.garcia@example.com", age: 24, role: "Frontend Developer" },
            { id: 19, name: "Samuel Martinez", email: "samuel.martinez@example.com", age: 33, role: "Backend Developer" },
            { id: 20, name: "Tina Robinson", email: "tina.robinson@example.com", age: 29, role: "Scrum Master" },
            { id: 21, name: "Uma Clark", email: "uma.clark@example.com", age: 26, role: "QA Engineer" },
            { id: 22, name: "Victor Rodriguez", email: "victor.rodriguez@example.com", age: 38, role: "System Architect" },
            { id: 23, name: "Wendy Lewis", email: "wendy.lewis@example.com", age: 31, role: "Business Analyst" },
            { id: 24, name: "Xavier Lee", email: "xavier.lee@example.com", age: 28, role: "Mobile Developer" },
            { id: 25, name: "Yara Walker", email: "yara.walker@example.com", age: 23, role: "Intern" },
            { id: 26, name: "Zach Hall", email: "zach.hall@example.com", age: 35, role: "DevOps Engineer" },
            { id: 27, name: "Aaron Young", email: "aaron.young@example.com", age: 27, role: "Frontend Developer" },
            { id: 28, name: "Bella King", email: "bella.king@example.com", age: 25, role: "Content Designer" },
            { id: 29, name: "Chris Wright", email: "chris.wright@example.com", age: 34, role: "Backend Developer" },
            { id: 30, name: "Diana Lopez", email: "diana.lopez@example.com", age: 29, role: "QA Engineer" },
            { id: 31, name: "Ethan Hill", email: "ethan.hill@example.com", age: 22, role: "Intern" },
            { id: 32, name: "Fiona Scott", email: "fiona.scott@example.com", age: 31, role: "Product Manager" },
            { id: 33, name: "George Green", email: "george.green@example.com", age: 37, role: "Security Engineer" },
            { id: 34, name: "Hannah Adams", email: "hannah.adams@example.com", age: 26, role: "Frontend Developer" },
            { id: 35, name: "Ian Baker", email: "ian.baker@example.com", age: 33, role: "Backend Developer" },
            { id: 36, name: "Julia Nelson", email: "julia.nelson@example.com", age: 28, role: "UI/UX Designer" },
            { id: 37, name: "Kevin Carter", email: "kevin.carter@example.com", age: 35, role: "Tech Lead" },
            { id: 38, name: "Laura Mitchell", email: "laura.mitchell@example.com", age: 24, role: "QA Engineer" },
            { id: 39, name: "Mark Perez", email: "mark.perez@example.com", age: 30, role: "Backend Developer" },
            { id: 40, name: "Nina Roberts", email: "nina.roberts@example.com", age: 27, role: "Frontend Developer" },
            { id: 41, name: "Oscar Turner", email: "oscar.turner@example.com", age: 39, role: "CTO" },
            { id: 42, name: "Paula Phillips", email: "paula.phillips@example.com", age: 34, role: "HR Manager" },
            { id: 43, name: "Ryan Campbell", email: "ryan.campbell@example.com", age: 29, role: "DevOps Engineer" },
            { id: 44, name: "Sophia Parker", email: "sophia.parker@example.com", age: 23, role: "Intern" },
            { id: 45, name: "Tom Evans", email: "tom.evans@example.com", age: 32, role: "Backend Developer" },
            { id: 46, name: "Ursula Edwards", email: "ursula.edwards@example.com", age: 28, role: "QA Engineer" },
            { id: 47, name: "Victor Collins", email: "victor.collins@example.com", age: 36, role: "Platform Engineer" },
            { id: 48, name: "Will Stewart", email: "will.stewart@example.com", age: 31, role: "Product Manager" },
            { id: 49, name: "Xena Morris", email: "xena.morris@example.com", age: 26, role: "Frontend Developer" },
            { id: 50, name: "Yusuf Rogers", email: "yusuf.rogers@example.com", age: 34, role: "Backend Developer" },
            { id: 51, name: "Zoe Reed", email: "zoe.reed@example.com", age: 22, role: "Intern" },
            { id: 52, name: "Adam Cook", email: "adam.cook@example.com", age: 29, role: "QA Engineer" },
            { id: 53, name: "Bianca Morgan", email: "bianca.morgan@example.com", age: 27, role: "UI Designer" },
            { id: 54, name: "Caleb Bell", email: "caleb.bell@example.com", age: 35, role: "Infrastructure Engineer" },
            { id: 55, name: "Denise Murphy", email: "denise.murphy@example.com", age: 31, role: "Business Analyst" },
            { id: 56, name: "Elliot Bailey", email: "elliot.bailey@example.com", age: 24, role: "Frontend Developer" },
            { id: 57, name: "Farah Cooper", email: "farah.cooper@example.com", age: 28, role: "QA Engineer" },
            { id: 58, name: "Gavin Richardson", email: "gavin.richardson@example.com", age: 37, role: "Solutions Architect" },
            { id: 59, name: "Hailey Cox", email: "hailey.cox@example.com", age: 26, role: "Product Designer" },
            { id: 60, name: "Ivan Howard", email: "ivan.howard@example.com", age: 33, role: "Backend Developer" },
            { id: 61, name: "Jasmine Ward", email: "jasmine.ward@example.com", age: 25, role: "Frontend Developer" },
            { id: 62, name: "Kyle Brooks", email: "kyle.brooks@example.com", age: 34, role: "DevOps Engineer" },
            { id: 63, name: "Liam Foster", email: "liam.foster@example.com", age: 29, role: "QA Engineer" },
            { id: 64, name: "Megan Price", email: "megan.price@example.com", age: 32, role: "Product Manager" }
        ]

        usersState.value = mockData;
    },
})
</script>

<template>
    <div>
        <h1>Home</h1>
        <div style="display:flex; flex-direction: column;">
            <NuxtLink to="/users">Go to /Users</NuxtLink>
            <NuxtLink to="/scss">Go to /scss</NuxtLink>
        </div>
    </div>
</template>
