const jwt = require('jsonwebtoken');
const fs = require('fs');

const options = {
  issuer: "https://rvw.eu.auth0.com/",
  audience: 'https://rvw.planer.daigeb.ch',
};

const cert = fs.readFileSync('public_key'); 
jwt.verify(
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UWTNSVEE0UmpNNU0wSTVSRVF3UlRJM1JUVXhNVUU1UTBZM1FUYzJRekpEUmpaR05UUkVOQSJ9.eyJpc3MiOiJodHRwczovL3J2dy5ldS5hdXRoMC5jb20vIiwic3ViIjoiU1pITGlMSTdoVVIyN3E2NFk1bW1PMjZVeTlLOVZ2Y3FAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcnZ3LnBsYW5lci5kYWlnZWIuY2giLCJpYXQiOjE1NDI0OTM3NTgsImV4cCI6MTU0MjU4MDE1OCwiYXpwIjoiU1pITGlMSTdoVVIyN3E2NFk1bW1PMjZVeTlLOVZ2Y3EiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.i3tKHeqCXr0LGXb-XiKIDThNq37r789-49xeMyqtebpV-cH2GBp30-v0lCpd4W-_Kcxgt-1JYtV3O3G2hAD-FrEX7T7zzLyY0VTAxuWtxYsZClbCKcpmwEcev6lWKwL0ng6dsMTZ107aW78UY0wHXh7yHkc5vO_6MnGXSzt4j7LaNi9HNQd2_owAlCIZbY6gPR_O1BeGCpKiMzfXa9PAlB2rgrXgnebFqKi3-fU8caGL1-7riqsvLXv3OL86yC_W6uBqRpNKRMnADxxs7gq38E-8g2RE4L3XGpkWSCRSP0h0jhE6OF3AUpQ27UEQTB94r9K3b_R5C3SvMfGqN2r4IQ',
  cert,
  options,
  (verifyError, decoded) => {
    if (verifyError) {
      console.log('verifyError', verifyError);
      // 401 Unauthorized
      console.log(`Token invalid. ${verifyError}`);
      return ;
    }
    // is custom authorizer function
    console.log('valid from customAuthorizer', decoded);
    console.log('success');
  });

