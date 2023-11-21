import { ref, onMounted } from 'vue';

export const useTimings = () => {
    const cssTimeToMilliSeconds = (timeString) => {
        const num = parseFloat(timeString, 10);
        let unit = timeString.match(/m?s/);
        let milliseconds = 0;

        if (unit) {
            // eslint-disable-next-line prefer-destructuring
            unit = unit[0];
        }

        switch (unit) {
        case 's': // seconds
            milliseconds = num * 1000;
            break;
        case 'ms': // milliseconds
            milliseconds = num;
            break;
        default:
            milliseconds = 0;
            break;
        }

        return milliseconds;
    };

    const getCssTimings = () => ({
        time: getComputedStyle(document.documentElement).getPropertyValue('--transition-time') || '.3s',
        timeHalf: getComputedStyle(document.documentElement).getPropertyValue('--transition-time-half') || '.15s',
        timeDouble: getComputedStyle(document.documentElement).getPropertyValue('--transition-time-double') || '.6s',
        easing: getComputedStyle(document.documentElement).getPropertyValue('--transition-easing') || 'ease-in-out',
    });

    const time = ref(getCssTimings().time);
    const timeHalf = ref(getCssTimings().timeHalf);
    const timeDouble = ref(getCssTimings().timeDouble);
    const easing = ref(getCssTimings().easing);

    onMounted(() => {
        time.value = getCssTimings().time;
        easing.value = getCssTimings().easing;
        timeHalf.value = getCssTimings().timeHalf;
        timeDouble.value = getCssTimings().timeDouble;
    });

    return {
        time,
        timeHalf,
        timeDouble,
        easing,
        cssTimeToMilliSeconds,
    };
};
