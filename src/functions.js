const getGenreNamesById = function(ids) {
    const { genres } = this.state;
    if(!genres) return;

    const filtered = genres.find(genre => genre.id === ids);

    if (!filtered) return;
    return filtered.name;
}

export {
    getGenreNamesById,
}