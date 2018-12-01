/**
 * 
 * Creating and exporting configuration variables
 * 
 */

// Dependencies

// Container for all aenvironments
let environments = {};

// Staging (default) environment
environments.stagin = {
    httpPort : 3000,
    httpsPort: 3001,
    envName : 'stagin',
    hashingSecret : 'thisIsASecret',
    maxChecks :  1,
    twilio : {
        accountSid : 'ACb32d411ad7fe886aac54c665d25e5c5d',
        authToken : '9455e3eb3109edc12e3d8c92768f7a67',
        fromPhone : '+15005550006'
    },
    currency : 'usd',
    stripe : 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
    mailGun : {
        apiKey : 'api:a3f3cdd6880b34abb1d7bb44cee15a82-059e099e-f611f8e6',
        from : 'postmaster@sandbox0cb17eb519324d13806845cafb2c3627.mailgun.org',
        domain : 'sandbox0cb17eb519324d13806845cafb2c3627.mailgun.org'
    }
};

// Production environment
environments.production = {
    httpPort : 5000,
    httpsPort: 5001,
    envName : 'production',
    hashingSecret : 'thisIsAlsoASecret',
    maxChecks :  1,
    twilio : {
        accountSid : 'ACb32d411ad7fe886aac54c665d25e5c5d',
        authToken : '9455e3eb3109edc12e3d8c92768f7a67',
        fromPhone : '+15005550006'
    },
    currency : 'usd',
    stripe : 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
    mailGun : {
        apiKey : 'api:a3f3cdd6880b34abb1d7bb44cee15a82-059e099e-f611f8e6',
        from : 'postmaster@sandbox0cb17eb519324d13806845cafb2c3627.mailgun.org',
        domain : 'sandbox0cb17eb519324d13806845cafb2c3627.mailgun.org'
    }
};

// Determine wich environment was passed as command line argument
let currentEnvironment = typeof( process.env.NODE_ENV ) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments avobe, if not, default to staging
let environmentToExport = typeof( environments[ currentEnvironment ] ) === 'object' ? environments[ currentEnvironment ] : environments.stagin;

// Export the module
module.exports = environmentToExport;



