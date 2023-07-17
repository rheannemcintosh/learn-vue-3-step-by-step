export default {
    template: `
        <section v-show="inProgressAssignments.length">
            <h2 class="font-bold mb-2">In Progress</h2>
            <ul>
                <li
                    v-for="assignment in inProgressAssignments"
                    :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete">
                    </label>
                </li>
            </ul>
        </section>
        
        <section class="mt-8" v-show="completedAssignments.length">
            <h2 class="font-bold mb-2">Completed</h2>
            <ul>
                <li
                    v-for="assignment in completedAssignments"
                    :key="assignment.id"
                >
                    <label>
                        {{ assignment.name }}
                    </label>
                    <input type="checkbox" v-model="assignment.complete">
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            assignments: [
                {
                    name: 'Finish Project',
                    complete: false,
                    id: 1,
                },
                {
                    name: 'Read Chapter 4',
                    complete: false,
                    id: 2,
                },
                {
                    name: 'Turn In Homework',
                    complete: false,
                    id: 3,
                },
            ]
        }
    },

    computed: {
        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete)
        },

        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete)
        }
    }
}
