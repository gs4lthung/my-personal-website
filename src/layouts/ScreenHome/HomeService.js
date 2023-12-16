export const startAnimation = (titleRef) => {
    const title = titleRef.current;
    let trigger = true;

    const intPropertyValue = (prop) => {
        const titleStyles = window.getComputedStyle(title);
        return parseInt(titleStyles.getPropertyValue(prop));
    };

    const textWidth = intPropertyValue('width');
    const initialPosition = intPropertyValue('background-position');

    const interval = setInterval(() => {
        const bgPosition = intPropertyValue('background-position');
        if (bgPosition === textWidth) trigger = false;
        if (bgPosition === initialPosition) trigger = true;

        if (trigger) {
            title.style.backgroundPosition = `${textWidth}px bottom`;
        } else {
            title.style.backgroundPosition = `${initialPosition}px bottom`;
        }
    }, 500);

    return () => clearInterval(interval);
};