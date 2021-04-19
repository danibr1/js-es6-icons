/****************************************************************
 * DISPLAY ICONS
 *****************************************************************/

 const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];


// colors
const colors = [
    '#001858',
    '#5eb030;',
    '#f582ae',
];


// Icon containers
const container = document.querySelector('.icons');
// 1. stampare le icone a schermo
// printIcons(icons, container);

// 2. Stampare icone colorate
const coloredIcons = colorIcons(icons, colors);
printIcons(coloredIcons, container);


// 3. Filter ICONS
// A. Generazione selecti options
const select = document.querySelector('#type');
const types = getType(coloredIcons);
genOption(types, select);


// B. Filtraggio on change
select.addEventListener('change', () => {
    const selected = select.value;

    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
});


/****************************************************************
 * FUNCTIONS
 *****************************************************************/

/**
 * PRINT ICONS ON SCREEN
 */
function printIcons(icons, container){
    // Generare il markup delle icone
    let html = '';
    icons.forEach( (icon) => {

        // destrutturazione dell'oggetto icon per usarlo 
        const {family,prefix, name, color} = icon;

        html +=
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color:${color}"></i>
            <div class="title">${name}</div>
        </div>`;
    });


    // Aggiunta icone al container icons
    container.innerHTML = html;

}

/**
 * RETURN COLOR COLLECTION BY TYPE
 */
function colorIcons (icons, colors){
    const types = getType(icons);
    console.log(types);
    console.log(colors);

    // Assegna un colore per tipo ad ogni icona
    const coloredIcons = icons.map( (icon) => {
        const indexType = types.indexOf(icon.type); // Restituisce l'indice 0 - 1 - 2

        return {
            ...icon,
            color: colors[indexType],
        }
    });
    console.log(coloredIcons);
    return coloredIcons;

}

/**
 * GET ICONS TYPE - restituisce i types UNIVOCI
 */
function getType(icons){
    const types = [];
    icons.forEach((icon) => {
        if (! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });
    
    return types;
}

/**
 * GENERA OPTION FOR FILTER
 */

function genOption(types, select){
    let options = '';
    types.forEach( (type) => {
        options += `<option value="${type}">${type}</option>`
    });

    select.innerHTML += options;
}

/**
 * FILTER ICONS SET
 */
function filterIcons (icons, selected){

    if(selected === 'all'){
        return icons;
    }

    const filtered = icons.filter( (icon) => {
        return icon.type === selected;
    });

    return filtered;
}