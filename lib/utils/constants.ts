export const ORDER_STATUS_LABELS = {
    PENDING: 'Pendiente',
    CONFIRMED: 'Confirmado',
    PREPARING: 'Preparando',
    READY: 'Listo',
    DELIVERED: 'Entregado',
    CANCELLED: 'Cancelado',
} as const;

export const DELIVERY_TYPE_LABELS = {
    PICKUP: 'Recoger en tienda',
    DELIVERY: 'Domicilio',
    DINE_IN: 'Comer aquí',
} as const;

export const PAYMENT_METHOD_LABELS = {
    CASH: 'Efectivo',
    CARD: 'Tarjeta',
    TRANSFER: 'Transferencia',
} as const;
