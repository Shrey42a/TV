export type Show = {
    id: number;
    image?: {
        medium: string;
    };
    name: string;
    genres: string[];
    rating: { average?: number };
    summary?: string;
}