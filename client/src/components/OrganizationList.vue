<template>
    <ul>
        <li v-for="organization in organizations">
            <button @click="selectOrganization(organization.id)">{{ organization.title }}</button>
            <ProjectList v-if="(selectedId === organization.id)" />
        </li>
    </ul>
</template>

<script lang="ts">
import ProjectList from '@/components/ProjectList.vue';

import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        ProjectList,
    },
    data() {
        return {
            selectedId: 0 as number,
            organizations: new Array<{id: number, title: string}>,
        }
    },
    methods: {
        selectOrganization(id: number) {
            if (this.selectedId === id) {
                this.selectedId = 0;
            }
            else {
                this.selectedId = id;

                // TODO: Move to centralised route-handler that can add/remove all query params as needed.
                this.$router.push({ query: { organization: id.toString() } });
            }
        }
    },
    async mounted() {
        this.organizations = await fetch('//localhost:8080/api/organizations', { mode: 'cors' }).then(res => res.json());
    }
});
</script>