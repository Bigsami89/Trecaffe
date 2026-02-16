import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center p-4">
                <h1 className="text-6xl font-bold text-primary mb-4 font-serif">404</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Página no encontrada
                </p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/">Volver al inicio</Link>
                </Button>
            </div>
        </div>
    );
}
