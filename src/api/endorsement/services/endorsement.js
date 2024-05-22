'use strict';

/**
 * endorsement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::endorsement.endorsement');
