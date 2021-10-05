export default class Pathfinder {

    static routes = ["home", "works", "about", "contact"];

    static findPathByNum = (num) => {
        switch (num) {
            case 1:
                return "/works";
            case 2:
                return "/about";
            case 3:
                return "/contact";
            default:
                return "/";
        }
    }

    static findNumByPath = (path = window.location.pathname) => {
        switch (path) {
            case "/works":
                return 1;
            case "/about":
                return 2;
            case "/contact":
                return 3;
            default:
                return 0;
        }
    }

}