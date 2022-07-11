const moon = document.querySelector(".moon");
const light = document.querySelector(".light");

const userTheme = localStorage.getItem('themed'); //user theme
const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches; //sys theme
const themeSwitcherBtns = document.querySelectorAll('.theme-switcher');

if (userTheme === 'dark' || (!userTheme && sysTheme)) {

    document.documentElement.classList.add('dark');
    light.classList.add("hidden");
} else{
    document.documentElement.classList.remove('dark');
    moon.classList.add("hidden");
}

themeSwitcherBtns.forEach(item => {
    item.addEventListener('click', (e) => {
        const theme = e.target.dataset.theme;
        console.log(theme);

        switch (theme) {
            case 'dark':{
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', theme);
                light.classList.add('hidden');
                moon.classList.remove('hidden');
                break;
            }  
            case 'light':{
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', theme);
                light.classList.remove('hidden');
                moon.classList.add('hidden');
                break;
            }  
            case 'system':{
                localStorage.removeItem(theme);
                if (sysTheme) {
                    document.documentElement.classList.add('dark');
                    light.classList.add('hidden');
                    moon.classList.remove('hidden');
                }else{
                    document.documentElement.classList.remove('dark');
                    light.classList.remove('hidden');
                    moon.classList.add('hidden');
                }
                break;
            }  

        
            default:
                break;
        }
    })
})

