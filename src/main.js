function processData(data) {
    // existing code...
    try {
        const result = validateInput(data);
        // ...
        processResult(result);
    } catch (error) {
        handleProcessingError(error);
    }
    // existing code...
}

function handleProcessingError(error) {
    console.error('Processing failed:', error);
    notifyUser(error.message);
} 