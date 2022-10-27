export default function propColorMixin(defaultColor = 'default') {
    return {
        props: {
            color: {
                type: String,
                default: defaultColor,
                validator: (value) =>
                    [
                        'solid-default',
                        'solid-primary',
                        'solid-warning',
                        'solid-info',
                        'solid-danger',
                        'solid-success',

                        'solid-light-default',
                        'solid-light-primary',
                        'solid-light-warning',
                        'solid-light-info',
                        'solid-light-danger',
                        'solid-light-success',

                        'outline-default',
                        'outline-primary',
                        'outline-warning',
                        'outline-info',
                        'outline-danger',
                        'outline-success',

                        'ghost-default',
                        'ghost-primary',
                        'ghost-warning',
                        'ghost-info',
                        'ghost-danger',
                        'ghost-success',
                    ].includes(value),
            },
        },
    };
}
