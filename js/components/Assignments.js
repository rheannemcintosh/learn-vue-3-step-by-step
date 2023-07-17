import AssignmentList from "./AssignmentList";

export default {
    components: { AssignmentList },
    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
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
