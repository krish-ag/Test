import jsonData from '../api/fakeLicenseapi.json';


const licenseValidator = (license, full_name) => {
    try {
      // Loop through the transactions array
      for (const transaction of jsonData.transactions) {
        // Check if the license parameters match the provided values
        if (
          transaction.certificateParameters.dlno === license &&
          transaction.certificateParameters.FullName === full_name
        ) {
          // Perform additional validation if needed
          if (transaction.isEligibleToDriveHMV) {
            return {
                message: 'License is valid.',
                isEligibleToDriveHMV: transaction.isEligibleToDriveHMV,
            } // Validation successful
            } else {
            return {
                message: 'License is invalid for Heavy motor vehicle.',
                isEligibleToDriveHMV: transaction.isEligibleToDriveHMV,
            }
        }
      }
    }
  

      return {
            message: 'License is invalid.'
      };
    } catch (err) {
      console.error('An error occurred:', err);
      return false; // Validation failed due to an error
    }
  };


export default licenseValidator;