module.exports = () => {

    let tag = (name) => {
        return new Date().toString() + ' - ' + '[' + name + '] ';
    };

    return {
        'info': (msg) => {
            console.info(tag('INFO') + msg);
        },
        'error': (msg) => {
            console.error(tag('ERROR') + msg);
        }
    };
};