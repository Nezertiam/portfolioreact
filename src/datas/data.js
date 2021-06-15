import { v4 as uuidv4 } from "uuid";

function data() {
    
    return {

        skills: [
            {
                icon: "far fa-window-restore",
                title: "Front-end Dev",
                text: "J'aime tout autant écrire mes propres feuilles de style tout comme passer par un framework CSS !",
                lists: [
                    {
                        label: "Technologies",
                        items:
                        [   
                            {
                                icon: "fab fa-html5",
                                label: "HTML 5",
                            },
                            {
                                icon: "fab fa-css3",
                                label: "CSS 3"
                            },
                            {
                                icon: "fab fa-sass",
                                label: "SASS"
                            },
                            {
                                icon: "fab fa-js",
                                label: "JavaScript ES6"
                            },
                            {
                                icon: "fab fa-react",
                                label: "React JS"
                            }
                        ],
                    },
                    {
                        label: "Outils",
                        items:
                        [
                            {
                                icon: "fab fa-github",
                                label: "GitHub"
                            },
                            {
                                icon: "fab fa-uikit",
                                label: "UiKit"
                            },
                            {
                                icon: "fab fa-bootstrap",
                                label: "Bootstrap"
                            },
                            {
                                icon: "fab fa-wordpress",
                                label: "WordPress"
                            },
                        ]
                    },
                ],
                id: uuidv4(),
            },
            {
                icon: "fas fa-code",
                title: "Back-end Dev",
                text: "Chez moi, front et back sont complémentaires. J'adore la logique du back et aime le front pour la détente.",
                lists: [
                    {
                        label: "Technologies",
                        items:
                        [   
                            {
                                icon: "fab fa-php",
                                label: "PHP 7 / 8",
                            },
                            {
                                icon: "fab fa-css3",
                                label: "Symfony 5"
                            },
                            {
                                icon: "fab fa-sass",
                                label: "MySQL"
                            },
                        ],
                    },
                    {
                        label: "Outils",
                        items:
                        [
                            {
                                icon: "fab fa-github",
                                label: "GitHub"
                            },
                            {
                                icon: "fas fa-database",
                                label: "PHPMyAdmin"
                            },
                            {
                                icon: "fas fa-database",
                                label: "HeidiSQL"
                            },
                            {
                                icon: "fab fa-wordpress",
                                label: "WordPress"
                            },
                        ]
                    },
                ],
            id: uuidv4(),
            },
        ],

        contacts: [
            {
                icon: "fas fa-envelope",
                title: "Email :",
                links: [
                    {
                        href: "mailto:mawyn.nhek@gmail.com",
                        label: "mawyn.nhek@gmail.com"
                    }
                ]
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Réseaux :",
                links: [
                    {
                        href: "https://github.com/Nezertiam",
                        icon: "fab fa-github"
                    },
                    {
                        href: "https://www.linkedin.com/in/mawyn-nhek-131bb7206/",
                        icon: "fab fa-linkedin"
                    },
                ]
            }
        ],

        coloredSections: {
            description: {
                title: "Bonjour !<br/>Moi c'est Mawyn, enchanté&nbsp;!",
                content: "Passionné par le monde de la programmation depuis tout petit, je me suis tourné vers les formations de développement et plus particulièrement dans la formation Développeur Web et Web Mobile chez <a className='coloredSection__link' target='_blank' href='https://www.elan-formation.eu/'>Elan Formation</a>."
            },
            outro: {
                title: "Besoin de me contacter ?",
                content: "Je suis joignable par mail, ou via les réseaux GitHub et LinkedIn."
            }
        }


        // This line


    }
}

export default data