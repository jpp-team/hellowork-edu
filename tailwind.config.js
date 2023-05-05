const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
                serif: ["Patua One", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                primary: "#dc3545",
                secondary: "#24324a",
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
