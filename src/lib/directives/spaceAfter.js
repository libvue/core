/**
 * spacing
 * @description: Sets a margin-bottom or margin-right depending if parent's flex direction
 *               Values are expressed as a factor of 1 rem.
 * @example:
 *      # Simple
 *      <lv-heading v-space-after="2">                  // Adds a margin-bottom of 2rem
 *
 *      # Advanced
 *      <lv-group spacing="1.5" direction="column">     // Gap is set to 1.5
 *          <child1>                                    // Gap set by parent
 *          <child2 v-space-after="2">                  // Adds a margin-bottom of 2rem minus the gap of the parent
 *          <child3>                                    // Gap set by parent
 *      </lv-group>
 */

const handler = (el, binding) => {
    const parentStyling = window.getComputedStyle(el.parentNode);
    const parentGap = parseInt(parentStyling.gap) ? parentStyling.gap : false;
    const parentFlexDirection = parentStyling.flexDirection;
    const parentDisplay = parentStyling.display;
    let spacingValue = `${binding.value}rem`;

    if (parentDisplay === 'flex') {
        if (parentGap) {
            spacingValue = `calc(${spacingValue} - ${parentGap})`;
        }
        if (parentFlexDirection === 'column') {
            el.style.marginBottom = spacingValue;
        }
        if (parentFlexDirection === 'row') {
            el.style.setProperty('margin-right', spacingValue);
        }
    } else {
        el.style.setProperty('margin-bottom', spacingValue);
    }
};

const spaceAfter = {
    mounted: (el, binding) => {
        handler(el, binding);
    },
    updated: (el, binding) => {
        if (binding.value !== binding.oldValue) {
            handler(el, binding);
        }
    },
};

export default spaceAfter;
