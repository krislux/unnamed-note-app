<template>
    <ul>
        <li v-for="project in projects">
            <button>{{ project.title }}</button>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            projects: new Array<{id: number, title: string}>,
        }
    },
    async mounted() {
        this.projects = await fetch('//localhost:8080/api/projects', { mode: 'cors' }).then(res => res.json());
    }
});
</script>