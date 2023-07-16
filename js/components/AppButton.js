export default {
    template: `
        <button
            :class="{
                'border rounded-xl px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-gray-200 enabled:hover:bg-gray-400': type == 'muted',
                'bg-blue-200 enabled:hover:bg-blue-400': type == 'primary',
                'bg-yellow-200 enabled:hover:bg-yellow-400': type == 'secondary',
                'bg-green-200 enabled:hover:bg-green-400': type == 'tertiary',
                'is-loading': processing
            }"
            :disabled="processing"
            @click="toggle"
        >
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary',
        },
        processing: {
            type: Boolean,
            default: false,
        },
    }
}