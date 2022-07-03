const websiteTitle = 'Student Myrstad';

const routes = {
    404: {
        template: './templates/404.html',
        title: '404 | ' + websiteTitle,
        description: 'Page not found'
    },
    '/': {
        template: './templates/index.html',
        title: websiteTitle,
        description: 'This is the homepage'
    },
    '/about': {
        template: './templates/about.html',
        title: 'About | ' + websiteTitle,
        description: 'This is the about page'
    },
    '/contact': {
        template: './templates/contact.html',
        title: 'Contact | ' + websiteTitle,
        description: 'This is the contact page'
    },
}

const locationHandler = async () => {
    let location = window.location.hash.replace("#", '');
    console.log(location);
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