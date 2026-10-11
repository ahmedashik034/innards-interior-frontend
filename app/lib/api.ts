export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  clientName?: string;
  location?: string;
  size?: string;
  tags?: string[];
  amenities?: string[];
  gallery?: string[];
  testimonial?: {
    clientName: string;
    role: string;
    quote: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

/**
 * Fetch all projects for portfolio carousels and lists
 */
export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_URL}/projects`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch projects');
    return await res.json();
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

/**
 * Fetch a single project by its ID for dynamic detail pages
 */
export async function fetchProjectById(id: string): Promise<Project | null> {
  try {
    const res = await fetch(`${API_URL}/projects/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch project with id ${id}`);
    }
    return await res.json();
  } catch (error) {
    console.error(`Error loading project ${id}:`, error);
    return null;
  }
}