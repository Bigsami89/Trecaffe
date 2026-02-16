export class NotificationService {
    async sendOrderConfirmation(orderId: string, email: string) {
        console.log(`Sending confirmation email to ${email} for order ${orderId}`);
        // Integration with Resend/AWS SES
    }

    async sendStatusUpdate(orderId: string, status: string, phone?: string) {
        if (phone) {
            console.log(`Sending SMS update to ${phone}: Order ${orderId} is now ${status}`);
            // Integration with Twilio/SNS
        }
    }
}

export const notificationService = new NotificationService();
