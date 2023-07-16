export default {
    template: `
        <button
            class="bg-gray-200 enabled:hover:bg-gray-400 border rounded-xl px-5 py-2 disabled:cursor-not-allowed"
            :disabled="processing"
            @click="toggle"
        >
            <slot />
        </button>
    `,

    data() {
        return {
            processing: false,
        };
    },

    methods: {
        toggle() {
            this.processing = !this.processing;
        }
    }
}