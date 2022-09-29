const propStatesMixin = {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        },
        success: {
            type: Boolean,
            default: false,
        },
    },
};

export default propStatesMixin;
