const propSizeMixin = {
    props: {
        size: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'small', 'large'].includes(value),
        },
    },
};

export default propSizeMixin;
