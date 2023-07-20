import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: { Assignments, Panel },

    template: `
        <div class="grid gap-6">
            <assignments></assignments>
            <panel>
                <template v-slot:heading>
                    Hi I have a heading
                </template>
                
                This is my default content
            </panel>
            <panel>                
                This is my default content
            </panel>
            <panel>
                <template v-slot:heading>
                    Hi I have a footer
                </template>
                
                This is my default content
                
                <template v-slot:footer>
                    Click Here to Learn More
                </template>
            </panel>
        </div>
    `,
}
