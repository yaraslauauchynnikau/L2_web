function parse_domain(url) {
    url = url.replace(/^(https?:\/\/)?(www\.)?/, '');
    return url.split('.')[0];
}