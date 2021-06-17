export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 0.5
        },
    },
}

export const heroTitleAnimation = {
    hidden: {
        y: 100,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    }
}