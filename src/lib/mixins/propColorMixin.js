export default function propColorMixin(defaultColor = 'default', defaultColorType = 'solid') {
    return {
        props: {
            color: {
                type: String,
                default: defaultColor,
                validator: (value) =>
                    [
                        'default',
                        'primary',
                        'warning',
                        'info',
                        'danger',
                        'success',
                        'light-primary',
                        'light-warning',
                        'light-info',
                        'light-danger',
                        'light-success',
                    ].includes(value),
            },
            colorType: {
                type: String,
                default: defaultColorType,
                validator: (value) => ['solid', 'outline'].includes(value),
            },
        },
    };
}
