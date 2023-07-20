export default {
    template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <h2 class="font-bold">{{ heading }}</h2>
        </div>
    `,

    props: {
        heading: String
    }
}