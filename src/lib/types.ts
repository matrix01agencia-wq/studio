export interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: 'client' | 'professional';
    createdAt: string;
    avatarUrl?: string;
    bannerUrl?: string;
    professionalDetails?: ProfessionalDetails;
}

export interface ProfessionalDetails {
    specialty: string;
    bio: string;
    rating: number;
    reviews: number;
}

export interface Service {
    id: string;
    professionalId: string;
    title: string;
    description: string;
    category: string;
    price: number;
    duration: string; // e.g., "1h", "45m"
}

export interface Appointment {
    id: string;
    clientId: string;
    professionalId: string;
    serviceId: string;
    date: string;
    status: 'agendado' | 'completado' | 'cancelado';
}

export interface Transaction {
    id: string;
    userId: string;
    date: string;
    description: string;
    amount: number;
    status: 'completado' | 'pendiente' | 'reembolsado';
}
