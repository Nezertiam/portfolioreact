export const containerHome = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { duration: 0.1, when: "beforeChildren", staggerChildren: 0.25 }
    },
}

export const container = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: { duration: 0.1, when: "beforeChildren", staggerChildren: 1 }
    },
}

export const pageAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.25 }
    },
}

export const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
            when: "beforeChildren",
            staggerChildren: 0.75
        }
    },
}

export const slideFromBottom = {
    hidden: { y: 100 },
    show: {
        y: 0,
        transition: { duration: 1 }
    }
}

export const scrollReveal = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25
        },
    },
};