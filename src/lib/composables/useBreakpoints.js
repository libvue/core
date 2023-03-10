import { ref, onMounted, onBeforeUnmount } from 'vue';

export const useBreakpoints = (ctx) => {

    const getCssBreakpoints = () => ({
        xs: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xs'), 10) || 0,
        sm: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'), 10) || 0,
        md: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'), 10) || 0,
        lg: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg'), 10) || 0,
        xl: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xl'), 10) || 0,
        xxl: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xxl'), 10) || 0,
    });

    const cssBreakpoints = ref(getCssBreakpoints());

    const breakpoints = ref({
        current: null,
        greaterOrEqual: {
            xs: null,
            sm: null,
            md: null,
            lg: null,
            xl: null,
            xxl: null,
        },
        smallerOrEqual: {
            xs: null,
            sm: null,
            md: null,
            lg: null,
            xl: null,
            xxl: null,
        },
    });

    const getBreakpointData = () => {
        const width = window.innerWidth;
        const breakPointData = {
            current: null,
            greaterOrEqual: {
                xs: width >= cssBreakpoints.value.xs,
                sm: width >= cssBreakpoints.value.sm,
                md: width >= cssBreakpoints.value.md,
                lg: width >= cssBreakpoints.value.lg,
                xl: width >= cssBreakpoints.value.xl,
                xxl: width >= cssBreakpoints.value.xxl,
            },
            smallerOrEqual: {
                xs: width < cssBreakpoints.value.sm,
                sm: width < cssBreakpoints.value.md,
                md: width < cssBreakpoints.value.lg,
                lg: width < cssBreakpoints.value.xl,
                xl: width < cssBreakpoints.value.xxl,
                xxl: width < Infinity,
            },
        };
        if (width >= cssBreakpoints.value.xs && width < cssBreakpoints.value.sm) {
            breakPointData.current = 'xs';
        } else if (width >= cssBreakpoints.value.sm && width < cssBreakpoints.value.md) {
            breakPointData.current = 'sm';
        } else if (width >= cssBreakpoints.value.md && width < cssBreakpoints.value.lg) {
            breakPointData.current = 'md';
        } else if (width >= cssBreakpoints.value.lg && width < cssBreakpoints.value.xl) {
            breakPointData.current = 'lg';
        } else if (width >= cssBreakpoints.value.xl && width < cssBreakpoints.value.xxl) {
            breakPointData.current = 'xl';
        } else if (width >= cssBreakpoints.value.xxl) {
            breakPointData.current = 'xxl';
        }
        return breakPointData;
    };

    const updateScreen = () => {
        breakpoints.value = getBreakpointData();
    };

    onMounted(() => {
        window.addEventListener('resize', updateScreen);
        updateScreen();
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateScreen);
    });

    return {
        breakpoints,
    };
};
