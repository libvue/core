const propColorMixin = {
    props: {
        color: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'primary', 'warning', 'info', 'success'].includes(value),
        },
    },
};

export default propColorMixin;
