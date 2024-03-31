const crypto = require ("crypto")
const { PRIVATE_KEY } = process.env

module.exports = {
    euclideanDistance:(descriptorA, descriptorB) => {
        // Check if descriptors are strings
        if (typeof descriptorA !== 'string' || typeof descriptorB !== 'string') {
            throw new Error('Descriptors must be strings');
        }
    
        // Split descriptors into arrays of numbers
        const featuresA = descriptorA.split(',').map(Number);
        const featuresB = descriptorB.split(',').map(Number);
        
        if (featuresA.length !== featuresB.length) {
            throw new Error('Feature vectors must have the same length');
        }
        
        // Calculate Euclidean distance based on features
        let sumOfSquares = 0;
        for (let i = 0; i < featuresA.length; i++) {
            sumOfSquares += Math.pow(featuresA[i] - featuresB[i], 2);
        }
        
        return Math.sqrt(sumOfSquares);
    },    
    
    manhattanDistance: (featuresA, featuresB) => {
        return featuresA.map((x, i) => Math.abs( x - featuresB[i] )).reduce((sum, now) => sum + now)
    },
    getInitializationVector: (len) => {
        return crypto.randomBytes(len)
    },
    
}