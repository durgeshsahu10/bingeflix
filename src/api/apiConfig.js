const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ed0e084847b7a9a8fcccba964a4c8faf',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;