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

export type ShowCast = {
    Show: {
        id: number;
        image?: {
            medium: string;
        };
        name: string;
        genres: string[];
        rating: { average?: number };
        summary?: string;
    },
    Cast: {
        image?: {
            medium: string;
            original: string;
        };
        name: string;
        id: number;
    }
}