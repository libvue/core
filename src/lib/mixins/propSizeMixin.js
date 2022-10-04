export default function propSizeMixin(defaultSize = 'default') {
    return {
        props: {
            size: {
                type: String,
                default: defaultSize,
                validator: (value) => ['default', 'small', 'large'].includes(value),
            },
        },
    };
}
