export default function propSizeMixin(defaultSize = 'default') {
    return {
        props: {
            size: {
                type: String,
                default: defaultSize,
                validator: (value) => ['tiny', 'small', 'default', 'large'].includes(value),
            },
        },
    };
}
