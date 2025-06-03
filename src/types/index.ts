export type PostImage = {
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title?: string;
    url?: string;

}

export type RootStackParamList = {
    Home: undefined;
    Detalles: PostImage;
    // Imagen: { imageUrl: string };
    ImagenFullScreen: PostImage;
};