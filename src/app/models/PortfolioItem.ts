import { Tag } from './Tag';

export interface PortfolioItem {
    name: string;
    displayName: string;
    shortDescription: string
    headerImage: string;
    tags?: string[];
    alternateImages?: string[];
    video?: string
}