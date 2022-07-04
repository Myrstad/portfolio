const websiteTitle = 'Elev Myrstad';

const routes = {
    404: {
        template: './templates/404.html',
        title: '404 | ' + websiteTitle,
        description: 'Nettsiden finnes ikke'
    },
    '/': {
        template: './templates/index.html',
        title: websiteTitle,
        description: 'Dette er hjemmesiden til Myrstad'
    },
    '/about': {
        template: './templates/about.html',
        title: 'Om meg | ' + websiteTitle,
        description: 'Dette er siden om hvem jeg er'
    },
    '/contact': {
        template: './templates/contact.html',
        title: 'Ta kontakt | ' + websiteTitle,
        description: 'Dette er siden for å kontakte meg'
    },
    '/projects': {
        template: './templates/projects.html',
        title: 'Mine prosjekter | ' + websiteTitle,
        description: 'Dette er siden for å vise fram prosjektene mine fra skolen'
    },
}

const locationHandler = async () => {
    let location = window.location.hash.replace("#", '');
    console.clear();
    console.log(location, location.split("/"));
    if (location.length === 0) {
        location = '/'
    }

    const route = routes[location] || routes[404];
    const html = await fetch(route.template).then(res => res.text());
    document.querySelector('#content').innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description);
}

window.addEventListener('hashchange', locationHandler);
locationHandler();