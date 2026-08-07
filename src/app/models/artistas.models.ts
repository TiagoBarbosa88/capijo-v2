interface Artistas {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  social: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
  };
}
