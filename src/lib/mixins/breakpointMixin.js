const cssBreakpoints = {
    xs: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xs'), 10),
    sm: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'), 10),
    md: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'), 10),
    lg: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg'), 10),
    xl: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xl'), 10),
    xxl: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xxl'), 10),
};
let width = window.innerWidth;

const breakpointMixin = {
    data() {
        return {
            breakpoints: this.getBreakpointData(),
        };
    },
    mounted() {
        window.addEventListener('resize', this.updateScreen);
        this.updateScreen();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateScreen);
    },
    methods: {
        getBreakpointData() {
            const breakPointData = {
                current: null,
                screenGreaterThen: {
                    xs: width >= cssBreakpoints.xs,
                    sm: width >= cssBreakpoints.sm,
                    md: width >= cssBreakpoints.md,
                    lg: width >= cssBreakpoints.lg,
                    xl: width >= cssBreakpoints.xl,
                    xxl: width >= cssBreakpoints.xxl,
                },
                screenLowerThen: {
                    xs: width < cssBreakpoints.sm,
                    sm: width < cssBreakpoints.md,
                    md: width < cssBreakpoints.lg,
                    lg: width < cssBreakpoints.xl,
                    xl: width < cssBreakpoints.xxl,
                    xxl: width < Infinity,
                },
            };
            
            if (width >= cssBreakpoints.xs && width < cssBreakpoints.sm) {
                breakPointData.current = 'xs';
            } else if (width >= cssBreakpoints.sm && width < cssBreakpoints.md) {
                breakPointData.current = 'sm';
            } else if (width >= cssBreakpoints.md && width < cssBreakpoints.lg) {
                breakPointData.current = 'md';
            } else if (width >= cssBreakpoints.lg && width < cssBreakpoints.xl) {
                breakPointData.current = 'lg';
            } else if (width >= cssBreakpoints.xl && width < cssBreakpoints.xxl) {
                breakPointData.current = 'xl';
            } else if (width >= cssBreakpoints.xxl) {
                breakPointData.current = 'xxl';
            }
            return breakPointData;
        },
        updateScreen() {
            width = window.innerWidth;
            this.breakpoints = this.getBreakpointData();
        },
    },
};

export default breakpointMixin;
