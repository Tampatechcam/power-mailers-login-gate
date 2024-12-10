export function validateInput(data) {
    if (!data || typeof data !== 'object') {
        throw new Error('Invalid input data');
    }
    
    return {
        ...data,
        validated: true,
        timestamp: Date.now()
    };
}

export function notifyUser(message) {
    // Implementation of user notification
    console.log(`User notification: ${message}`);
} 