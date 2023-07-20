import Assignments from "./Assignments.js";

export default {
    components: { Assignments },

    template: `
        <div class="grid gap-6">
            <assignments></assignments>
            <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
                <h2 class="font-bold">Hello World</h2>
            </div>
        </div>
    `,
}
